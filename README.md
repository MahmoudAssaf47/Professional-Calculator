# Professional Calculator

مرحبًا بك في مشروع الآلة الحاسبة الاحترافية
## فيديو توضيحي

لرؤية الشكل النهائي للواجهة الأمامية، شاهد الفيديو التوضيحي المرفق:

<video width="600" controls>
  <source src="https://raw.githubusercontent.com/MahmoudAssaf47/Professional-Calculator/main/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


في هذا هنتعرف على كيفية تعديل الكود الخاص بالآلة الحاسبة بتاعتك. الكود مقسوم لثلاثة ملفات رئيسية، وكل ملف ليه دور محدد. هنتناول كل ملف على حدة، وإزاي تقدر تعدل عليه لتحقيق التعديلات اللي انت عايزها.

## الملفات

1. **index.html**
   - ده ملف الـ HTML اللي بيحتوي على الهيكل الأساسي للصفحة. هنا هتلاقي العنوان وأزرار الآلة الحاسبة بالإضافة لزر تغيير المود. لو عايز تضيف عناصر جديدة أو تعدل في العناصر الموجودة، افتح الملف ده وعدل فيه.

2. **styles.css**
   - ده ملف الـ CSS اللي بيحدد شكل الصفحة والألوان والخطوط. هنا هتلاقي تنسيقات الوضع الفاتح (Light Mode) والوضع الداكن (Dark Mode). لو عايز تغير الألوان أو شكل الأزرار، هتعدل في هذا الملف.

3. **script.js**
   - ده ملف الـ JavaScript، وهو المسئول عن العمليات الحسابية وتغيير الوضع بين الداكن والفاتح. لو حابب تعدل كيفية تنفيذ العمليات أو تغيير الكود المسئول عن تغيير الوضع، افتح الملف ده.

## كيفية التعديل

### 1. تعديل HTML
لو حابب تضيف عناصر جديدة أو تعدل في النصوص، افتح ملف `index.html` وعدل فيه. كل تفاصيل الصفحة هنا.

### 2. تعديل CSS
لو عايز تغير الألوان أو تنسيق الأزرار، افتح ملف `styles.css`. هنالك قسمين رئيسيين: 
- **Light Mode**: لتنسيقات الوضع الفاتح
- **Dark Mode**: لتنسيقات الوضع الداكن

### 3. تعديل JavaScript
لو عايز تغير طريقة تنفيذ العمليات الحسابية أو كود تغيير الوضع، افتح ملف `script.js`. هنا هتجد الأكواد المسئولة عن التفاعل مع الأزرار وتغيير المود.

## مثال للتعديلات

### تغيير لون النص العلوي في الوضع الداكن
لو حابب تخلي لون النص العلوي أبيض في الوضع الداكن، اضف الكود التالي في `styles.css`:

```css
body.dark-mode h1 {
    color: #fff;
}
```



بكده، تكون جاهز لتعديل الكود حسب رغبتك وتحسين تجربة المستخدم للآلة الحاسبة بتاعتك. اتمنى لك تجربة ممتعة مع المشروع!
---

Welcome to the Professional Calculator Project

In this README, you'll find information on how to customize your calculator code. The code is divided into three main files, each with a specific role. We'll cover each file and how you can make modifications to achieve your desired changes.

## Files

1. **index.html**
   - This is the HTML file containing the basic structure of the page. Here you'll find the title, calculator buttons, and the theme switch button. If you want to add new elements or modify existing ones, open this file and make your changes.

2. **styles.css**
   - This is the CSS file that defines the page's appearance, colors, and fonts. It includes styles for both light mode and dark mode. To change colors or button styles, edit this file.

3. **script.js**
   - This is the JavaScript file responsible for performing calculations and switching between light and dark modes. If you want to modify how calculations are performed or change the mode switching logic, open this file.

## How to Modify

### 1. HTML Changes
If you want to add new elements or edit text, open the `index.html` file and make your changes. This file contains the structure of the page.

### 2. CSS Changes
To change colors or button styles, open the `styles.css` file. There are two main sections:
- **Light Mode**: Styles for the light theme
- **Dark Mode**: Styles for the dark theme

### 3. JavaScript Changes
If you want to modify how calculations are done or change the mode switching code, open the `script.js` file. This file contains the code responsible for interacting with the buttons and switching themes.

## Example Modifications

### Changing the Top Text Color in Dark Mode
If you want to change the top text color to white in dark mode, add the following CSS code to `styles.css`:

```css
body.dark-mode h1 {
    color: #fff;
}
```

With these instructions, you're all set to modify the code and enhance your calculator experience. Enjoy customizing your project!
