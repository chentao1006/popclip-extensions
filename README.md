![PopClip Extensions Banner](assets/banner.png)

# PopClip Extensions Collection | PopClip 扩展集合

A collection of powerful and customizable extensions for [PopClip](https://www.popclip.app/) on macOS.

一套功能强大且可自定义的 macOS PopClip 扩展合集。

---

## 🚀 Featured Extensions | 特色扩展

### 🤖 AI Commands
**English:** Define up to 10 custom AI prompts to process selected text.
- **Customizable**: Set your own prompts for translation, summarization, proofreading, etc.
- **OpenAI Compatible**: Works with OpenAI, DeepSeek, Moonshot, and any OpenAI-compatible API.
- **Auto-Copy**: The AI response is automatically copied to your clipboard.

**中文：** 可定义多达 10 个自定义 AI 指令来处理选中的文本。
- **高度可定制**：可自行设置翻译、总结、校对等 Prompt。
- **兼容性强**：支持 OpenAI、DeepSeek、月之暗面 (Moonshot) 等任何兼容 OpenAI 接口的服务。
- **自动复制**：AI 生成的内容会自动拷贝到剪贴板。

### ⚡️ Run Shortcut
**English:** Run your macOS Shortcuts directly from the PopClip menu.
- **Searchable List**: Choose from all your installed shortcuts.
- **Text Input**: Automatically passes the selected text as input to the shortcut.

**中文：** 直接从 PopClip 菜单运行 macOS 快捷指令。
- **列表选择**：从你所有的快捷指令中选择运行。
- **文本输入**：自动将选中的文本作为输入传递给快捷指令。

---

## 🛠 Installation | 安装方法

### AI Commands
1. Download or clone this repository.
2. Drag the `AICommands.popclipext` folder onto the PopClip icon in your menu bar.
3. Configure your **API Key**, **API Base**, and **Model** in the extension settings.
4. Enable the commands you want (Command 1-10) and enter your custom prompts.

### Run Shortcut
1. Download or clone this repository.
2. Drag the `RunShortcut.popclipext` folder onto the PopClip icon in your menu bar.
3. When triggered, it will prompt you to select a shortcut from your system.

---

## ⚙️ Configuration | 配置

### AI Commands Settings
- **API Key**: Your API key for the provider.
- **API Base**: The base URL (default: `https://api.openai.com/v1`).
- **Model**: The model name (e.g., `gpt-4o`, `deepseek-chat`).
- **System Message**: Optional system-level instructions for the AI.
- **Commands**: Each command has an **Enabled** toggle and a **Prompt** field.

---

## 📄 License | 许可证
MIT
