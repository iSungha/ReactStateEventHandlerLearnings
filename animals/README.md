# Step 1: Download and install Node.js using fnm (Fast Node Manager)
fnm install 22

# Step 2: Verify that the correct Node.js version is in the environment
node -v    # Should print "v22.12.0"

# Step 3: Verify that the correct npm version is in the environment
npm -v     # Should print "10.9.0"

# Step 4: Create a new React app using Vite
npm create vite@latest my-react-app -- --template react

# Step 5: Navigate into the app directory
cd my-react-app

# Step 6: Install project dependencies
npm install

# Step 7: Run the development server
npm run dev


Removing:
Remove-Item -Recurse -Force .\package-lock.json



### Some Cool Extensions and Shortcuts in VS Code

---

#### 1. **Emmet Abbreviations**
- Use:  
  `div.container>h1{Hello World}`  
  To generate:  
  <div className="container">
    <h1>Hello World</h1>
  </div>





**ES7+ React/Redux/React-Native Snippets Extension**

### : setting up `afn` if its not availble:
1. Open **File > Preferences > User Snippets** in VS Code.  
2. Look for `javascriptreact.json`
3. adjust

{
  "Arrow Function JSX": {
    "prefix": "afn",
    "body": [
      "const ${1:functionName} = ($2) => {",
      "  $0",
      "};"
    ],
    "description": "Create a simple arrow function in JSX"
  }
}

   Type `afn` and press **Tab**:  
   ```javascript
   const functionName = (params) => {
     
   };
   ```  


  - Typing `rafce` generates:  

    const ComponentName = () => {
      return <div>ComponentName</div>;
    };
    export default ComponentName;


---

#### 3. **Wrap Multiple Lines in Comments or Use Other Commands**
- Press:  
  **Ctrl + Shift + P** (Windows/Linux)  
  Opens the command palette for various useful actions.

---

#### 4. **Move Lines Up/Down**
- Shortcut:  
  **Alt + Up/Down Arrow** (Windows/Linux)  
  Quickly reorder lines of code.

---

#### 5. **Quick Rename**
- Shortcut:  
  Select a variable, state, or component, and press **F2** to rename it across the file.

---

#### 6. **Duplicate Lines**
- Shortcut:  
  **Shift + Alt + Down Arrow** (Windows/Linux)  
  Duplicates the current line or selection.

---

#### 7. **Format Code**
- Shortcut:  
  **Shift + Alt + F** (Windows/Linux)  
  Formats your code to make it clean and consistent.

--- 
