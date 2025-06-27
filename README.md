# Code Review Assistant

A web-based tool for code review and improvement suggestions, supporting Python and Java. Analyze your code for quality, security, and get AI-powered suggestions and answers to custom questions.

---

## 🚀 Features
- **Monaco Editor**: Write or paste code with syntax highlighting (Python, Java).
- **Multi-Language Support**: Analyze Python (pylint, bandit) and Java (Checkstyle) code.
- **Security Checks**: Detect security issues in Python code (bandit).
- **AI Suggestions**: Get improvement tips from OpenAI (GPT-3.5 Turbo).
- **Custom AI Prompt**: Ask the AI specific questions about your code.
- **REST API**: `/analyze` endpoint for code analysis.

---

## 🗂️ Project Structure
```
Code Review Assistant/
│
├── backend/
│   ├── app.py            # Flask API server
│   ├── analysis.py       # Analysis logic (pylint, bandit, Checkstyle, OpenAI)
│   └── requirements.txt  # Python dependencies
│
└── frontend/
    ├── index.html        # Main UI (Monaco Editor, controls)
    ├── style.css         # Styling
    └── app.js            # Frontend logic
```

---

## ⚙️ Setup Instructions

### 1. **Clone or Download the Project**
Place the project in your desired directory

### 2. **Backend Setup**
- Open a terminal and navigate to the backend folder:
  ```sh
  cd "D:\Py\Code Review Assistant\backend"
  pip install -r requirements.txt
  ```
- **Run the Flask server:**
  ```sh
  python app.py
  ```
- The backend will run at `http://127.0.0.1:5000/`

### 3. **Frontend Setup**
- Open `frontend/index.html` in your web browser.
- (Optional) Use a local server or VS Code Live Server for best results.

### 4. **Java Support (Optional)**
- Install [Checkstyle](https://checkstyle.sourceforge.io/) and ensure it's in your system PATH.
- Download a config file (e.g., `google_checks.xml`) and place it in an accessible location.
- Edit `analysis.py` if you need to change the Checkstyle config path.

### 5. **OpenAI API Key**
- **Set your OpenAI API key as an environment variable before running the backend:**
  - On Windows (PowerShell):
    ```powershell
    $env:OPENAI_API_KEY="your-openai-api-key"
    ```
  - On Mac/Linux:
    ```sh
    export OPENAI_API_KEY="your-openai-api-key"
    ```
- The backend will read the key from the environment. **Do NOT hardcode your API key in the code or upload it to GitHub.**

---

## 📝 Usage

### **Step-by-Step Example: Python Code**

1. **Start the backend:**
   ```sh
   cd "D:\Py\Code Review Assistant\backend"
   python app.py
   ```
   You should see:
   ```
   * Running on http://127.0.0.1:5000/
   ```

2. **Open the frontend:**
   - Go to the `frontend` folder.
   - Double-click `index.html` to open it in your browser.

3. **Select Python** from the language dropdown.

4. **(Optional) Enter a custom AI prompt** (e.g., `How can I make this code faster?`).

5. **Paste this code in the editor:**
   ```python
   def add_numbers(a, b):
       return a + b

   print(add_numbers(2, 3))
   ```

6. **Click "Analyze Code".**

7. **View the results** in the Output Panel:
   - **Quality:** Code issues (from pylint)
   - **Security:** Security warnings (from bandit)
   - **Suggestions:** AI-powered improvement tips
   - **AI Response:** The answer to your custom question (if you asked one)

---

### **Step-by-Step Example: Java Code**

1. **Select Java** from the language dropdown.

2. **(Optional) Enter a custom AI prompt** (e.g., `Is this code following best practices?`).

3. **Paste this code in the editor:**
   ```java
   public class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```

4. **Click "Analyze Code".**

5. **View the results** in the Output Panel:
   - **Quality:** Java code issues (from Checkstyle, if installed)
   - **Security:** (Not implemented for Java, will show a message)
   - **Suggestions:** AI-powered tips for Java
   - **AI Response:** The answer to your custom question

---

### **Troubleshooting**
- If you see errors about Checkstyle, you may need to install it for Java support.
- If you get an OpenAI error, check your internet connection and API key.
- If the backend isn't running, the frontend won't get results—make sure the Flask server is started.

---

## 🤖 API Usage
- **Endpoint:** `POST /analyze`
- **Request JSON:**
  ```json
  {
    "code": "<your code>",
    "language": "python" | "java",
    "prompt": "<optional custom question>"
  }
  ```
- **Response JSON:**
  ```json
  {
    "quality": ["..."],
    "security": ["..."],
    "suggestions": ["..."],
    "custom_ai_response": "..."
  }
  ```

---

## 📄 License
This project is for educational and personal use. For commercial use, please check the licenses of the integrated tools (pylint, bandit, Checkstyle, OpenAI API). 
