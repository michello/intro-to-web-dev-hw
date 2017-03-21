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
- **Project page**: The projects and design parts are wrapped up within their individual div. There are then two links to trigger the toggle function, which will show the link's corresponding div and hide the other link's corresponding div.
- **Pop Up Modal**: The pop up is created with a modal box, which is a popup window that is displayed on the page. 
- **Nav bar**: When the screen resizes small enough, a class is added to the nav bar so that its CSS changes for the nav bar to be mobile friendly.

Explanation of some of your source code (not the entire site but sometime you found challenging or interesting you’d like to share)

## Encountered Issues
- **Floating Penguin Image**: Animating the penguin on my homepage was problem I couldn't solve until I randomly set its position to relative.
- **Project page**: Figuring out how to toggle between products and design was another challenge. At times it didn't show the correct div and others, nothing appeared or was switched at all.
- **Nav bar**: Getting the nav bar to trigger to its proper size was an issue and challenge I experienced again and again. For now, it works as desired but still not properly formatted.

## What I Learned 
- Media Queries/ jQuery
- Responsive design

## Next Steps
- Improve navigation bar & projects page toggling
- Finish projects page