import { Component, signal } from '@angular/core';
@Component({selector:'app-root',templateUrl:'./app.html',styleUrl:'./app.css'})
export class App {
  menuOpen = signal(false);
  activeCategory = signal('Todos');
  videoUrl = ''; // Set to /videos/brand-film.mp4 when the final film is ready.
  whatsapp = 'https://wa.me/573124188114?text=Hola%20Optics%20NK%2C%20quiero%20agendar%20una%20cita%20y%20conocer%20sus%20monturas.';
  categories = ['Todos','Monturas','Lentes','Contacto'];
  collections = [
    {category:'Monturas',title:'Tu estilo. Tu montura.',subtitle:'Diseños que hablan de ti',image:'images/eyewear.jpg',tag:'MONTURAS & GAFAS DE SOL'},
    {category:'Lentes',title:'Cada luz, una nueva mirada.',subtitle:'Fotocromáticos, progresivos y más',image:'images/lenses.jpg',tag:'LENTES A TU MEDIDA'},
    {category:'Contacto',title:'Libertad para tu día a día.',subtitle:'Encuentra tus lentes de contacto',image:'images/contact.jpg',tag:'LENTES DE CONTACTO'}
  ];
  filteredCollections(){return this.collections.filter(c=>this.activeCategory()==='Todos'||c.category===this.activeCategory());}
  closeMenu(){this.menuOpen.set(false);}
}
