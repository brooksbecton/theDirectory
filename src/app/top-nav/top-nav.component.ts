import { Component } from '@angular/core'
declare var $:JQueryStatic;


@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.component.html'
})

export class TopNavComponent {
    flipped: boolean;
    constructor() {
        this.flipped = true;
    }

    /*
    * Takes the the current page and returns true if the navigation href
    * matches the URL
    */
    isActive = function (viewLocation: string) {
        console.log("window.location.pathname: " + window.location.pathname);
        console.log('viewLocation: ' + viewLocation); 
        return viewLocation == window.location.pathname;
    };

    /*
    * Simulates a click on the nav button to re collapse the mobile nav
    */
    collapseNav = function () {
        // $(".navbar-collapse").collapse('hide');
        // //returning scroll to top of page
        // $('html,body').scrollTop(0);
    };

    /*
    *  If the devices screen is less then 767px it will stack the navigations
    *  by removing the Bootstrap class '.nav-pills'
    */
    stackNav = function () {
        if (window.innerWidth >= 767) {
            return true;
        }
        else {
            return false;
        }
    };

    toggleFlipped = function (flag: string) {
        // Keeps the brand from flipping when the nav is closed
        if (flag == 'brand' && this.flipped == true) {
            this.flipped = true;
        }
        else if (this.flipped == true) {
            this.flipped = false;
        }
        else {
            this.flipped = true;
        }
    };
}