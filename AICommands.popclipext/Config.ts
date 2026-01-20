// #popclip
// name: AI Commands
// icon: circle filled AI
// identifier: com.ct106.popclip.ai.commands
// description: Up to 10 user-defined AI commands on selected text, copied to clipboard
// popclipVersion: 4586
// entitlements: [network]

import axios from "axios";

// 基本配置
export const options = [
  { identifier: "apiKey", label: "API Key", type: "secret", description: "Your OpenAI API key" },
  { identifier: "apiBase", label: "API Base URL", type: "string", defaultValue: "https://api.openai.com/v1", description: "OpenAI API base URL" },
  { identifier: "model", label: "Model", type: "string", defaultValue: "gpt-4.1-mini", description: "OpenAI model" },
  { identifier: "systemMessage", label: "System Message", type: "string", description: "Optional system message" },
];

// 10 条 prompt 配置，每条加 enabled 控制按钮显示
for (let i = 1; i <= 10; i++) {
  options.push(
    { identifier: `cmd${i}Enabled`, label: `Command ${i} Enabled`, type: "boolean", defaultValue: false },
    { identifier: `cmd${i}`, label: `Command ${i} Prompt`, type: "string", defaultValue: "" }
  );
}

type Options = InferOptions<typeof options>;

let lastError: string | null = null;

const runAIRequest = async (apiBase: string, apiKey: string, model: string, systemMsg: string, prompt: string) => {
  try {
    const messages = systemMsg.trim()
      ? [{ role: "system", content: systemMsg }, { role: "user", content: prompt }]
      : [{ role: "user", content: prompt }];
    const res = await axios.post(`${apiBase}/chat/completions`, { model, messages }, { headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" } });
    const content = res.data?.choices?.[0]?.message?.content;
    if (!content) throw new Error("No content returned from API");
    return content;
  } catch (e) {
    lastError = String(e);
    popclip.showText("AI request error: " + lastError);
    return null;
  }
};

// 动态生成 10 个 action
export const actions: Action<Options>[] = Array.from({ length: 10 }).map((_, idx) => {
  const i = idx + 1;
  return {
    title: `Command ${i}`,
    icon: `circle AI${i}`, // 圆圈 + AI + 数字
    requirements: [`option-cmd${i}Enabled=1`, "text"], // 控制显示
    code: async (input: { text: string }, options: Options) => {
      try {
        const promptTemplate = options[`cmd${i}`]?.trim() || "";
        if (!promptTemplate) return; // 空 prompt → 不执行

        const prompt = `${promptTemplate}\n\n${input.text.trim()}`;
        const aiText = await runAIRequest(options.apiBase, options.apiKey, options.model, options.systemMessage, prompt);
        if (!aiText) return;

        // 固定动作 copy
        popclip.copyText(aiText);
        popclip.showText(aiText); // 显示提示
      } catch (err) {
        lastError = String(err);
        popclip.showText("Error: " + lastError);
      }
    },
  };
});

export const debug = { getLastError: () => lastError };
