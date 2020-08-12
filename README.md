# ochre-templates

This repository contains functioning templates for web pages designed to allow you to easily create a website for your project.  These templates are specifically designed to pull images and data dynamically from the OCHRE database, so the website will be automatically updated along with the information in the database.


## List of files

**index.html:** Template for the homepage of the website.\
**basic-template.css:** Template for the stylesheet for the homepage.\
**about.html:** Template for an "About" page, for general information about your project.\
**about.css:** Template for the stylesheet for the "About" page.\
**contact.html:** Template for a page with contact information for your project.\
**contact.css:** Template for the stylesheet for the contact page.\
**gallery-collection.html:** Template for an image gallery with the images laid out in a grid formation.\
**gallery-collection.js:** Contains the code necessary for the grid-style image gallery to function.\
**gallery-referencestrip.html:** Template for an image gallery where the user views one image at at time, with a scrolling strip containing previews of the other images along the bottom.\
**gallery-referencestrip.js:** Contains the code necessary for the reference strip image gallery to function.\
**gallery.css:** Template for the stylesheet for the image gallery.  This style will apply to whichever of the two gallery options you choose.


## How to use


### index.html

When you open up the template , look for the line near the top with the placeholder page title ("Webpage title here"), and replace "Webpage title here" with the desired title for your webpage.

In the navigation bar code, you are provided with templates for three links, and three dropdown menus with three links each.  (One link and one dropdown menu are commented out.)  For each dropdown menu that you would like to use, replace "Menu [1/2/3]" with your desired name for that dropdown menu.  The template provides three links in each dropdown menu, but if you would like more then you can create additional links using the same format as the template links provided.  If you would like fewer than three links, then you can comment out the extra ones.  For each link, replace the placeholder name with your name for the link, and replace the "#" with the URL that it links to.  Follow the same procedure for the links that are not in a dropdown menu.

Note that you will have to repeat this procedure for the webpage title and the navbar for each page template that you add to your site.

After the end of the navbar code, look for the place that says "Project Title" and replace it with the title of your project.  While the title field at the top of the template ("Webpage title here") controls what the user will see as the name of the browser tab, this "Project Title" field is what will show up as the heading at the top of the webpage.

A few lines underneath this, replace "Project description goes here" with a short description of your project that you would like to appear on the homepage.


### homepage.css

#### .bg:
- **background-color:** This specifies the background color for the page for small screens (mobile phones) and for if the background image fails to load.

#### .container:
- **color:** This specifies the text color for the title.
- **font-family:** This specifies the font for the title.
- **font-weight:** This specifies the font weight (e.g. normal, bold, etc.) for the title.

#### .container h1:
- **font-size:** This specifies the font size for the title.

#### .text:
- **color:** Specifies the text color for the project description.
- **font-family:** Specifies the font for the project description.
- **font-size:** Specifies the font size for the project description.

#### @media (min-width: 768px):
- **background-image:** Specifies the background image for the homepage (only for screen sizes medium or larger).  Replace the placeholder link with the link or path to your desired background image.


### about.html

Repeat the procedure for the webpage title and the navbar so that these features match those on the homepage.  Replace the placeholder title ("About the Project") in the title field with your desired title for your about page.

The template for the about page currently has space for four sections of text, each with a corresponding image and a title.  If you would like fewer, then you can comment out one or more of the sections starting right after the line "section x begins here" and ending right above the line "section x+1 starts here" or "section 4 ends here."  If you would like more than 4 sections, you can copy the template format from one of the existing sections -- sections 1 and 3 have the image to the right of the text, and sections 2 and 4 have the image to the left of the text.

For each section of your about page, replace "Section x Title" with the title for that section.  Then go to the next line and replace the placeholder text with the text for that section.  Each section also contains an image -- the code for this can be found below the placeholder text in sections 1 and 3, and above the placeholder text in sections 2 and 4.  In the src field, replace "assets/image1.jpg" with the link to your image (in quotation marks), and, in the alt field, replace "image x" with alt text describing the image.  This text is what will display in place of the image if the image is unable to be loaded.


### about.css

#### .title:
- **background-image:** This provides the link to the background image for the title bar; format is url("path or link to image");.  If you would like the background of the title bar to be a solid color rather than an image, then comment this line out.
- **background-color:** This determines what the background color for the title bar will be if the image is unable to be loaded.  If you would like the background of the title bar to be a solid color rather than an image, this is where you specify that color.
- **color:** Color of the title text

#### .bg:
- **background-color:** This determines the background color for the about page, excluding the title bar.  If you would like a background image instead of a solid color, then add a background-image line using the same format as the one in the .title field, and use this background-color line to specify what color you would like the page to be if the image cannot be loaded.

#### .col-sm-8 h3
- **font-size:** This specifies the font size for the section titles.  If you would like to change this font size, then uncomment the font-size line and add your desired font size (don't forget to put a semicolon at the end!)
- **color:** This specifies the text color for the section titles.  If you would like to change it, then uncomment the "color:" line and replace "white" with your desired text color.
- **font-family:** This specifies the font for the section titles.  If you would like to change it, uncomment the "font-family:" line and add your desired font (don't forget to put a semicolon at the end!)
- **font-weight:** This specifies the font weight (e.g. normal, bold, etc.) for the section titles.  If you would like to change it, uncomment the "font-weight:" line and add your desired font weight (don't forget to put a semicolon at the end!)

#### .col-sm-8 p:
- **font-size:** This specifies the font size for the body text of each section.
- **color:** This specifies the text color for the body text of the sections.  If you would like to change it, uncomment the "color:" line and replace "white" with your desired text color.
- **font-family:** This specifies the font for the body text of each section.  If you would like to change it, uncomment the "font-family:" line and add your desired font (don't forget to put a semicolon at the end!)
- **font-weight:** This specifies the font weight (e.g. normal, bold, etc.) for the body text of the sections.  If you would like to change it, uncomment the "font-weight:" line and add your desired font weight (don't forget to put a semicolon at the end!)


### contact.html

Repeat the procedure for the webpage title and the navbar so that these features match those on the homepage.  Replace the placeholder title ("Contact Us") in the title field with your desired title for your contact page, if you would like it to be different.

The template contains fields for two email addresses, one phone number, and an office address with two lines.  If you would like to include additional types of contact information, you can add them in the same format as the ones currently included, and if you would like to remove some then you can comment them out.  You are also free to add or remove lines within each field of contact info (email, phone, office), and change the text of these lines as you wish.  The box and image will grow or shrink to fit the amount of text in the contact information section.


### contact.css

#### .title:
- **color:** This specifies the color of the title text.  If you would like to change it, uncomment the "color:" line and replace "white" with your desired color.  (For example, you might want to do this if your background color is too dark for the title to be easily seen as it is.)
- **font-family:** This specifies the font of the title text.  If you would like to change it, uncomment the "font-family:" line and add your desired font (don't forget to put a semicolon at the end!)
- **font-weight:** This specifies the font weight (e.g. normal, bold, etc.) for the title.  If you would like to change it, uncomment the "font-weight:" line and add your desired font weight (don't forget to put a semicolon at the end!)

#### .bg:
- **background-color:** This specifies the background color for the page.

#### .col-sm-7:
- **background-image:** This specifies the image that will appear next to the contact information.  The format is url("path or link to image");.
- **background-color:** This specifies the color that will appear in the image slot if the image is unavailable.  In the template, this is currently specified to be the same color as the background of the contact information.

#### .col-sm-5:
- **background-color:** This specifies the background color for the box containing the contact information.
- **color:** This specifies the text color for the contact information.  If you would like to change it, uncomment the "color:" line and replace "white" with your desired text color.

#### .col-sm-5 h4:
- **font-family:** If you would like to change the font for the contact info headings ("Email," "Phone," and "Office" in the template), uncomment this line and add the desired font.
- **font-weight:** If you would like to change the font weight (e.g. normal, bold, etc.) for the contact info headings, uncomment this line and add the desired font weight.

#### .col-sm-5 p:
- **font-family:** If you would like to change the font for the contact information (this does not include the headings "Email," "Phone," "Office"), uncomment this line and add the desired font.
- **font-weight:** If you would like to change the font weight (e.g. normal, bold, etc.) for the contact information (does not include the headings), uncomment this line and add the desired font weight.


### Image Galleries

You can choose between two different styles of image gallery.  The files "gallery-collection.html" and "gallery-collection.js" contain the code for a gallery that displays the images in a grid formation, while the files "gallery-referencestrip.html" and "gallery-referencestrip.js" contain the code for a gallery that displays one image at a time, with a scrolling clickable strip containing previews of the other images along the bottom.  Both gallery options use the same stylesheet, "gallery.css."  The reference strip gallery is recommended for large image hierarchies since it loads the images a few at a time, whereas the collection gallery loads all the images before displaying anything and therefore is much slower than the reference strip gallery for large image hierarchies.


### gallery-collection.html:

Repeat the procedure for the webpage title and the navbar so that these features match those on the homepage.

This template contains a gallery picker, which allows the user to switch between different image galleries associated with the project without leaving or reloading the page.  Each of the links in the gallery picker will display one image hierarchy on this page.  The gallery picker currently contains 4 different image slots, but if you would like to have more then you can add more links by copying the format of the ones provided.  If you add more links, then use "link5," "link6," "link7," etc. as the id.  If you would like fewer than 4 links, then comment out the ones you are not using.  Replace the text of the links ("Gallery x") with a descriptive name for each gallery.  You do not need to change any of the text in this section besides these gallery names.


### gallery-collection.js:

At the top of this file are variables that store the URLs for each image hierarchy you would like to display.  Replace the placeholder link for url1 with the URL to the image hierarchy or set that you would like to use for the first gallery link, replace the placeholder link for url2 with the URL to the image hierarchy or set that you would like to use for the second gallery link, and so on.  If you are using more than 4 links in the gallery picker, define the variable "var url5" to be the link to the 5th image hierarchy, and so on.  If you are using fewer than 4 links, then comment out the lines for the links you are not using.

If you are using more than 4 links, go to the bottom of the page and add a line for each additional link in the format "var galLink5 = document.getElementById("link5);"  For each additional link, copy the onclick function for galLink4 and replace the "galLink4" on the first line with "galLink5," "galLink6," and so on, and replace the line "loadXML(url4);" with "loadXML(url5);" "loadXML(url6);" and so on.


### gallery-referencestrip.html

Repeat the procedure for the webpage title and the navbar so that these features match those on the homepage.

This template contains a gallery picker, which allows the user to switch between different image galleries associated with the project without leaving or reloading the page.  Each of the links in the gallery picker will display one image hierarchy on this page.  The gallery picker currently contains 4 different image slots, but if you would like to have more then you can add more links by copying the format of the ones provided.  If you add more links, then use "link5," "link6," "link7," etc. as the id.  If you would like fewer than 4 links, then comment out the ones you are not using.  Replace the text of the links ("Gallery x") with a descriptive name for each gallery.  You do not need to change any of the text in this section besides these gallery names.


### gallery-referencestrip.js

At the top of this file are variables that store the URLs for each image hierarchy you would like to display.  Replace the placeholder link for url1 with the URL to the image hierarchy or set that you would like to use for the first gallery link, replace the placeholder link for url2 with the URL to the image hierarchy or set that you would like to use for the second gallery link, and so on.  If you are using more than 4 links in the gallery picker, define the variable "var url5" to be the link to the 5th image hierarchy, and so on.  If you are using fewer than 4 links, then comment out the lines for the links you are not using.

If you are using more than 4 links, go to the bottom of the page and add a line for each additional link in the format "var galLink5 = document.getElementById("link5);"  For each additional link, copy the onclick function for galLink4 and replace the "galLink4" on the first line with "galLink5," "galLink6," and so on, and replace the line "loadXML(url4);" with "loadXML(url5);" "loadXML(url6);" and so on.


### gallery.css

#### body, html:
- **background-color:** This specifies the background color for the page.

#### .gallery-picker h4:
- **color:** This specifies the color for the text "View Gallery:" in the gallery picker.  If you would like to change it, uncomment the "color:" line and replace "white" with your desired text color.

#### .gallery-picker a:
- **color:** This specifies the color of the links in the gallery picker.  If you would like to change it, uncomment the "color:" line and replace "black" with your desired color.


## OpenSeaDragon

### Display viewer with multiple TileSources


