/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.group(() => {
  Route.get('/index','MazersController.index');
  Route.get('/table','TableController.index')
  Route.get('/datatable','TableController.datatable')
  
  Route.group(() => {
    Route.get('/alert','ComponentsController.alert')
    Route.get('/badge','ComponentsController.badge')
    Route.get('/breadcrumb','ComponentsController.breadcrumb')
    Route.get('/button','ComponentsController.button')
    Route.get('/card','ComponentsController.card')
    Route.get('/carousel','ComponentsController.carousel')
    Route.get('/dropdown','ComponentsController.dropdown')
    Route.get('/list-group','ComponentsController.listGroup')
    Route.get('/modal','ComponentsController.modal')
    Route.get('/navs','ComponentsController.navs')
    Route.get('/pagination','ComponentsController.pagination')
    Route.get('/progress','ComponentsController.progress')
    Route.get('/spinner','ComponentsController.spinner')
    Route.get('/tooltip','ComponentsController.tooltip')
  }).prefix('/components')

  Route.group(() => {
    Route.group(() => {
      Route.get('/avatar','ComponentsController.extraAvatar')
      Route.get('/sweet-alert','ComponentsController.extraSweetAlert')
      Route.get('/toastify','ComponentsController.extraToastify')
      Route.get('/rating','ComponentsController.extraRating')
      Route.get('/divider','ComponentsController.extraDivider')
    }).prefix('/components')
  }).prefix('/extra')

  Route.group(() => {    
    Route.get('/default','LayoutsController.default')
    Route.get('/1-column','LayoutsController.oneColumn')
    Route.get('/vertical-navbar','LayoutsController.verticalNavbar')
    Route.get('/horizontal','LayoutsController.horizontal')
  }).prefix('/layouts')

  Route.group(() => {    
    Route.get('/input','FormsController.input')
    Route.get('/input-group','FormsController.inputGroup')
    Route.get('/select','FormsController.select')
    Route.get('/radio','FormsController.radio')
    Route.get('/checkbox','FormsController.checkbox')
    Route.get('/textarea','FormsController.textarea')
    Route.get('/layout','FormsController.layout')


    Route.group(() => {
      Route.get('/qull','EditorsController.editorQuill')
      Route.get('/ckeditor','EditorsController.editorCkeditor')
      Route.get('/summernote','EditorsController.editorSummernote')
      Route.get('/tinymce','EditorsController.editorTinymce')
    }).prefix('/editor')
  }).prefix('/forms')

  Route.group(() => {
    Route.get('/file-uploader','WidgetsController.fileUploader')

    Route.group(() => {
      Route.get('/chatbox','WidgetsController.chatbox')
      Route.get('/pricing','WidgetsController.pricing')
      Route.get('/to-do-list','WidgetsController.toDoList')
    }).prefix('/widgets')

    Route.group(() => {
      Route.get('/bootstrap-icons','IconsController.bootstrapIcons')
      Route.get('/fontawesome','IconsController.fontAwesome')
      Route.get('/dripicons','IconsController.dripIcons')
    }).prefix('/icons')

    Route.group(() => {
      Route.get('/chartjs','ChartsController.chartJS')
      Route.get('/apexcharts','ChartsController.apexCharts')
    }).prefix('/charts')

    Route.group(() => {
      Route.get('/google-map','MapsController.googleMap')
      Route.get('/jsvector-map','MapsController.jsVectorMap')
    }).prefix('/maps')
  }).prefix('/ui')

  Route.group(() => {
    Route.get('/email','ApplicationsController.email');
    Route.get('/chat','ApplicationsController.chat');
    Route.get('/gallery','ApplicationsController.gallery');
    Route.get('/checkout','ApplicationsController.checkout');

    Route.group(() => {
      Route.get('/login', 'ApplicationsController.authLogin')
      Route.get('/register', 'ApplicationsController.authRegister')
      Route.get('/forgot-password', 'ApplicationsController.authForgotPassword')
    }).prefix('/auth')

    Route.group(() => {
      Route.get('/403', 'ApplicationsController.error403')
      Route.get('/404', 'ApplicationsController.error404')
      Route.get('/500', 'ApplicationsController.error500')
    }).prefix('/auth')

  }).prefix('/applications')

}).prefix('/mazer').namespace('App/Controllers/Http/Mazer')
