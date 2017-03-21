# Week 8 - Midterm Site

## Documentation of My Process
I more or less followed the layout of my mockups which can be found [here](https://github.com/ml4963/intro-to-web-dev-hw/tree/master/Week_4/img).

### Navbar
The nav bar displays the links to navigate through the site. Once the window screen becomes small enough, the toggle icon is triggered and appers. When you click on it, the links that are collapsed are shown as bocks on top of one another.

### Homepage
- I created the floating image on the side in Illustrator and then animated it with CSS and jQuery.
- I also used [Matt Boldt's](www.mattboldt.com) the typing text effect which I customized using jQuery and added my own custom text as members in a list.

### Projects
- Projects page is divided into two sections: programming and design. In order to separate the two, I created two divs and a javascript script that toggles from one div to the next upon click.
- The programming section is layouted in a grid format. Each cell has a thumbnail of an image of project and label with the name of the project. Upon click, a pop up will appear with a thumbnail project image to the left and a description, which includes the name, links and tags of technology and tools used, to the right.
- The design section, which is incomplete, is also layouted in a grid format and displayed similarily. Instead of a pop up appearing when clicking on each thumbnail image, however, the thumbnail takes the user to a separate page that will display more info about the featured design project.


### Contact
- Contacts page starts off with a greeting and below are social media icons that are wrapped with <a> tags. 
- A form was also made for people to email me. Because github pages can only host static sites, I had to use [Formspree](https://formspree.io/).

## Source Code Explanation
- **Project page**: Coming up with a way to switch between projects and design was a challenging issue. What ended up happening is that there is a different div wrapped around projects and design. There are two links to trigger the toggle function, which will show the link's corresponding div and hide the other link's corresponding div.

- **Pop Up Modal**: Creating the pop up modal was something new and fun for me.

- **Nav bar**: Creating a responsive, toggleable navbar also posed a great challenge. As the end result, the nav bar is 

Explanation of some of your source code (not the entire site but sometime you found challenging or interesting you’d like to share)

## Encountered Issues
- **Pop Up Modal**: Having the popup modal to work was a struggle.
- **Project page**: Being able to hide one div and show the other div and do vice versa infinitely was also a struggle.

## What I Learned 
- Media Queries/ jQuery
- Responsive design

## Next Steps
- Improve navigation bar & projects page toggling
- Finish projects page