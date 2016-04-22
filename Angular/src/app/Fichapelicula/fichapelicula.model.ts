import {comentario} from './comentario.model';
import {usuario} from './usuario.model';
import {hashtag} from './hashtag.model';

export class fichapelicula{
    titulo: string;
    hashtag:hashtag[];
    puntuacion: string;
    like: number;
    imagen: string;
    trailer: string;
    etiqueta:string[];
    descripcion:string;
    vnegativa: string;
    vnegautor:string;
    vpositiva: string;
    vpostautor:string;
    comentario:comentario[];
    bso: string;
    nombrebso:string;

  constructor(titulo:string, h:hashtag[], p:string, l:number, i:string, t:string, e:string[], d:string, vn:string, vna:string, vp:string, vpa:string,c:comentario[], bso:string, n:string){
      this.titulo=titulo;
      this.hashtag=h;
      this.puntuacion=p;
      this.like=l;
      this.imagen=i;
      this.trailer=t;
      this.etiqueta=e;
      this.descripcion=d;
      this.vnegativa=vn;
      this.vnegautor=vna;
      this.vpositiva=vp;
      this.vpostautor=vpa;
      this.comentario=c;
      this.bso=bso;
      this.nombrebso=n;
    }
}
