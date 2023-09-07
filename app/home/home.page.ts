import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router ) {
    setTimeout(() =>{
      this.router.navigateByUrl('login')
    },2000);
    
    this.activeroute.queryParams.subscribe(params => {
      console.log(router.getCurrentNavigation()?.extras.state)
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
        console.log(this.data.usuario)
      } else {this.router.navigate(["/login"])}
    });

  }
  ngOnInit() {}
}
