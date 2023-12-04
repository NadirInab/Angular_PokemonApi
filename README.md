<div align="center">
     <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*bMgQ8MhbnQexpqHgIgBJPA.png" alt="Image Alt Text">
  
</div>

![Javascript](https://img.shields.io/badge/Angular-red.svg)
![Javascript](https://img.shields.io/badge/JavaScript-gold.svg)
![Javascript](https://img.shields.io/badge/component-bleusvg)
![Javascript](https://img.shields.io/badge/SPA-red.svg)
![Javascript](https://img.shields.io/badge/dataBinding-white.svg)
![Javascript](https://img.shields.io/badge/services-yellow.svg)
![Javascript](https://img.shields.io/badge/typescript-bley.svg)

## Angular : 
- Angular is a platform for building web applications using TypeScript, HTML, and CSS. 
- It provides tools and structures to create interactive, dynamic, and single-page applications. Angular simplifies development by offering a framework that organizes code, manages data, handles user interactions, and helps create a seamless user experience on the web.

### Few notions : 

## Components:
-  Components are the individual parts of an Angular application that encapsulate specific features or sections.
-  They consist of : TypeScript code, HTML templates, and styles.

# Modules
- Modules are containers that group related components, directives, pipes, and services in an Angular application. They help organize and manage the overall structure of the app.
  
# Services:
- Services are reusable pieces of code that perform specific tasks or provide shared data and functionality across components. 
- They promote code reuse and maintain a separation of concerns.


# Angular CLI :
Angular CLI provides many commands for various tasks, such as generating services, pipes, modules, and more. Here some the most common used ones : 

- Create a new Angular application :
  
```md
  ng new my-app

```

- Generate a new component::
  
```md
  ng generate component my-component


```
- Serve the application locally: :
  
```md
  ng serve

```

- Run unit tests: :
  
```md
 ng test


```

# Angular templates : 
 Angular templates involves data binding and interpolation.

 ## interpolation {{ expression }} 
 - Interpolation is a way to output the result of an expression in the HTML template. 

```md
<p>Welcome, {{ username }}!</p>

```

 ## Property Binding [property]="expression" 
 - Property binding allows you to set the value of an HTML element's property to the result of an expression.
  

```md
<img [src]="imageUrl" alt="Image">

```

 ## Event Binding (event)="expression"
 - Event binding allows you to respond to user events (e.g., clicks, mouseovers).
  

```md
<button (click)="onButtonClick()">Click me</button>


```

## OnInit :
- The OnInit interface in Angular is used to define a lifecycle hook for a component. 
- Specifically, the OnInit interface has a single method called ngOnInit(), which is a lifecycle hook that is called after the component has been initialized.
- this hook to perform any initialization logic needed for the component, such as fetching data, setting up subscriptions.
  
- The Component decorator is used to define the metadata for the component, including the selector, template, and style URLs.

