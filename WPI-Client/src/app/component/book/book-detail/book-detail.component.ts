import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { BookService } from '../../../Service/book-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BookModel } from '../book-model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['../../product/product.component.css',
    '../../product/product-detail/product-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  Config: NgxCarousel;
  id: number;
  bookModel: BookModel;
  imgurl: string[];
  department: string;
  name: string;
  price: string;
  contactInfo: string;
  ownerID: string;
  desc: string;
  date: string;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.Config = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      point: {
        visible: true
      },
      loop: true,
      touch: false
    };
  }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
        //  this.id = +params['id'];
          this.bookService.getBook(+params['id'])
            .then((book) => {
              this.bookModel = book;
              this.imgurl = this.bookModel.imgUrl;
              this.department = this.bookModel.department;
              this.name = this.bookModel.name;
              this.contactInfo = this.bookModel.contactInfo;
              this.price = this.bookModel.price;
              this.ownerID = this.bookModel.ownerID;
              this.desc = this.bookModel.description;
              this.date = this.bookModel.today;
            //  console.log(this.bookModel);
              // return this.bookModel;
            })
            .catch((e) => {
              this.router.navigate(['/Not-found']);
            });
        }
      );
    // console.log(this.bookModel);
  //  console.log(typeof this.id);
  }
}
