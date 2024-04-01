# EllesSneakerShop
![LOGO](https://github.com/ilvanaburgic/EllesSneakerShop/assets/118178331/219cc17b-73cd-497a-a4bf-68d91cad306d)


<h1>IT 207 - Introduction to Web Programming</h1>

<h2>Project</h2>

<p>Welcome to the repository for my solo project! Here, I am dedicated to developing a Sneaker shop web application named <strong>Elles</strong>.

Stay tuned for progress reports, and feel free to provide feedback and suggestions as I work on this exciting project!

Let's dive into coding and craft remarkable experiences! 🚀</p>

<h2>Milestones</h2>

<details>
  <summary><em>Milestone #1</em></summary>
<p>

For milestone #1, I created the frontend part of the application using HTML and CSS. I used JavaScript for dynamic functionalities. The cart button displays a success message and returns the user to the home page.<br>
	
<strong>In the project I have 5 HTML files, 1 CSS file and 1 JavaScript file. The files are organized as follows:</strong>
<ul>
	<li>index.html</li>
	<li>home.html</li>
	<li>shop.html (shop page)</li>
	<li>sproduct.html (page of individual product with details)</li>
	<li>about.html (about the application)</li>
	<li>cart.html (cart)</li>
	<li>registration.html</li>
	<li>profile.html</li>
</ul>


<br><strong>Home page contains: (home.html)</strong>
<ul>
	<li>"Header section" - contains an image (logo), Home, Shop, About, Shopping cart.</li>
	<li>"Hero section", which contains the "Look at the offer" button, which leads to the shop.html page.</li>
	<li>"Featured sneakers section", which contains products.</li>
	<li>The "Banner section" contains the "Look at the offer" button, which leads to the shop.html page.</li>
	<li>The "Newsletter section" contains a button for SignUp, as well as space to enter an e-mail address</li>
	<li>"Footer section", same as on all other pages! Contains Logo, Contact, About (About us - leads to about.html page).</li>
</ul>

<br><strong>Shop page contains: (shop.html)</strong>
<ul>
	<li>"Header section" - contains an image (logo), Home, Shop, About, Shopping.</li>
	<li>"Sneakers section" - Contains all products - sneakers</li>
	<li>"Page section" - Contains an image and two titles</li>
 	<li>"Sneakers section" - Contains all products - sneakers</li>
  <li>The "Newsletter section" contains a button for SignUp, as well as space to enter an e-mail address</li>	
	<li>"Footer section", same as on all other pages! Contains Logo, Contact, About (About us - leads to about.html page).</li>

</ul>


<br><strong> Sproduct page contains: (sproduct.html)</strong>
<ul>
	<li>"Header section" - contains an image (logo), Home, Shop, About, Shopping.</li>
	<li>"IMAGES" - contains one large pictures of product</li>
	<li>Page also have : Input to select size, select quantity, add to cart button and product details section</li>
	<li>The "Newsletter section" contains a button for SignUp, as well as space to enter an e-mail address</li>
	<li>"Footer section", same as on all other pages! Contains Logo, Contact, About (About us - leads to about.html page).</li>

</ul>

<br><strong>About page contains: (about.html)</strong>
<ul>
	<li>"Header section" - contains an image (logo), Home, Shop, About, Shopping.</li>
	<li>"Title section" - contains the title</li>
	<li>"Text section" - contains text that describes about</li>
	<li>"Footer section", same as on all other pages! Contains Logo, Contact, About (About us - leads to about.html page).</li>

</ul>

<br><strong>Cart page contains: (page.html)</strong>
<ul>
	<li>"Header section" - contains an image (logo), Home, Shop, About, Shopping.</li>
	<li>"Photo and tle section" - contains background-image and two titles, one big "Shop now" and paragraph "Buy smart"</li>
	<li>"Table with item section" - contains: Remove, Image, Product, Price, Quantity, Subtotal and descriptions of everything in the cart</li>
	<li>"Footer section", same as on all other pages! Contains Logo, Contact, About (About us - leads to about.html page).</li>

</ul>

<br><strong>Registration page contains: (registration.html)</strong>
<ul>
	<li>"Header section" - contains an image (logo), Home, Shop, About, Shopping.</li>
	<li>"Profile section" - contains email and password as well as Registrate button, which leads to profile.html.</li>
	<li>"Footer section", same as on all other pages! Contains Logo, Contact, About (About us - leads to about.html page).</li>

</ul>

<br><strong>Profile page contains: (profile.html)</strong>
<ul>
	<li>"Header section" - contains an image (logo), Home, Shop, About, Shopping.</li>
	<li>"Profile section" - contains Profile settings, Name, Surname, Address, PostCode, Country, Number, Email, button. Profile.html appears when we press the button on the cart.html page button is called "Proceed to checkout".</li>
	<li>"Footer section", same as on all other pages! Contains Logo, Contact, About (About us - leads to about.html page).</li>

</ul>
</p>
</details>

<details>
  <summary><em>Milestone #2</em></summary>

  <p>
	<br>
	For milestone #2, I created a Single Page Application (SPA) in my project by following the instructions posted on the Learning Management System (LMS). Additionally, I created Ajax calls to the API and developed a functional and responsive frontend application. Below, everything is explained in detail!	

Spapp.
===============================
**Spapp** is a simple jquery plugin that help to create single page application. The principle is quite simple.
With this plugin you will load a main page wrapper that will load every other view (or if you prefer page) on url hash change.

----------


HTML
-------------
First of all, i update my HTML (index.html).
```html
<section id="pageContent">
    <main id="spapp" role="main">
      <section id="home" data-load="home.html"></section>
      <section id="shop" data-load="shop.html"></section>
      <section id="sproduct" data-load="sproduct.html"></section>
      <section id="about" data-load="about.html"></section>
      <section id="cart" data-load="cart.html"></section>
      <section id="profile" data-load="profile.html"></section>
      <section id="registration" data-load="registration.html"></section>
    </main>
  </section>
```

----------
JS
-------------
When I set html, I was write the javascript to run the plugin. (script.js) ->example: 
```js
var app = $.spapp({
  defaultView: "#shop",
  templateDir: "../../views/",
  pageNotFound: "error_404"
});

app.route({
  view: "sproduct",
  load: "sproduct.html",
  onCreate: function () {  },
  onReady: function () {
    var productId = localStorage.getItem("productId");
    $.ajax({
      url: 'assets/js/products.json',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        var product = products.find(p => p.id.toString() === productId);
        if (product) {
          document.getElementById("MainImg").src = product.image;
          document.querySelector('.single-pro-details h4').textContent = product.name;
          document.querySelector('.single-pro-details h3').textContent = `$${product.price}`;
          document.querySelector('.single-pro-details span').textContent = product.description;

        } else {
          console.error('The product is not found');
        }
      },
      error: function (error) {
        console.error('An error occurred while retrieving data', error);
      }
    });
  }
});

app.run();
```
----------

Ajax calls to the API.
===============================
**Ajax calls to the API** is a simple jquery plugin that help to create single page application. The principle is quite simple.
With this plugin you will load a main page wrapper that will load every other view (or if you prefer page) on url hash change.

----------

Functional and responsive frontend application.
===============================

**Functional frontend application** 

I designed a functional frontend application to efficiently carry out specific tasks and operations as required by users, with a strong emphasis on effectiveness and interactions within the user interface. When I created this application, I ensured that every button had its specific function, focusing on providing a clear and direct way for users to interact with the application.

**Responsive front-end application** 

When I was creating a responsive frontend application, I selected different sizes for devices: 390px, 430px, 768px, 799px, and 1280px. This ensured that the design would adapt seamlessly to different screen sizes and resolutions, providing an optimal viewing experience across various devices. The combination of functional and responsive design elements results in an application that is both useful and accessible on different devices.

----------

</p>
</details>

<details>
  <summary><em>Milestone #3</em></summary>
  <p>In progress...</p>
</details>

<details>
  <summary><em>Milestone #4</em></summary>
  <p>In progress...</p>
</details>

<details>
  <summary><em>Milestone #5</em></summary>
  <p>In progress...</p>
</details>

<h2>About the Author</h2>
<p></p>Should you have any inquiries, feel free to reach out to me. You can contact me using the provided link below. <br></p>
https://www.linkedin.com/in/ilvana-burgić-697840256