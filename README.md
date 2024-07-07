# Thanks for viewing my Project ✨

![ a main page screenshot](./screen.png) ADD SCREEN
<br />

## :star: **Implementation:**
In this project, I used Webpack. It has additional configuration.

To install Webpack, run:


            npm install

After that, you can start the project by running:

            npm start

<br />
<br />

## Main goal of my work was to:

**1. Dynamic Image Grouping**: automatically assign images to random groups upon page load to create a dynamic and interactive gallery experience.

**2. Seamless Image Navigation**: implement next and previous navigation functionalities for easy browsing through grouped images.

**3. Custom Event Handling**: utilize custom events to manage interactions, ensuring a modular and scalable codebase.

**4. Responsive Design**: ensure the slider works smoothly on various screen sizes, providing an optimal user experience across devices.

**5. Enhanced User Interaction**: display a zoomed view of images on click and allow users to easily close the slider, enhancing user engagement.

**6. Code Modularity and Reusability**: develop the slider as a modular class to promote reusability and ease of integration into different projects.

<br />

## Solutions provided in the project

**1. Dynamic Image Grouping**
Images are dynamically assigned to groups labeled 'nice' or 'good' on page load, enabling flexible and varied gallery setups.

            const init = () => {
                const imagesList = document.querySelectorAll('.gallery__item');
                imagesList.forEach(img => {
                    img.dataset.sliderGroupName = Math.random() > 0.5 ? 'nice' : 'good';
                });
            
                const jsSlider = new JSSlider('.gallery__item');
                jsSlider.run();
            }
            document.addEventListener('DOMContentLoaded', init);

**2. Seamless Image Navigation**
Implementing navigation buttons to cycle through images in the same group, allowing users to move to the next or previous image with ease.

            class JSSlider {
                // ...
                initEvents() {
                    // ...
                    const navNext = this.sliderRootElement.querySelector('.js-slider__nav--next');
                    if (navNext) {
                        navNext.addEventListener('click', () => {
                            this.fireCustomEvent(this.sliderRootElement, 'js-slider-img-next');
                        });
                    }
            
                    const navPrev = this.sliderRootElement.querySelector('.js-slider__nav--prev');
                    if (navPrev) {
                        navPrev.addEventListener('click', () => {
                            this.fireCustomEvent(this.sliderRootElement, 'js-slider-img-prev');
                        });
                    }
                }
            
                onImageNext() {
                    // Navigate to the next image
                }
            
                onImagePrev() {
                    // Navigate to the previous image
                }
                // ...
            }

**3. Custom Event Handling**
Leveraging custom events to manage the slider's behavior, enhancing the code's modularity and maintainability.

            class JSSlider {
                // ...
                fireCustomEvent(element, name) {
                    const event = new CustomEvent(name, { bubbles: true });
                    element.dispatchEvent(event);
                }
            
                initCustomEvents() {
                    this.imagesList.forEach((img) => {
                        img.addEventListener('js-slider-img-click', (event) => {
                            this.onImageClick(event);
                        });
                    });
            
                    this.sliderRootElement.addEventListener('js-slider-img-next', () => this.onImageNext());
                    this.sliderRootElement.addEventListener('js-slider-img-prev', () => this.onImagePrev());
                    this.sliderRootElement.addEventListener('js-slider-close', (event) => this.onClose(event));
                }
                // ...
            }
            
**4. Responsive Design**
Ensuring that the slider adapts to different screen sizes, providing a consistent and user-friendly interface across all devices.

            .js-slider {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 800px;
                margin: auto;
            }
            
**5. Enhanced User Interaction**
Displaying the zoomed view of images on click and providing easy-to-use navigation and close functionalities.

            class JSSlider {
                // ...
                onImageClick(event) {
                    this.sliderRootElement.classList.add('js-slider--active');
                    const src = event.currentTarget.querySelector('img').src;
                    this.sliderRootElement.querySelector('.js-slider__image').src = src;
            
                    const groupName = event.currentTarget.dataset.sliderGroupName;
                    const thumbsList = document.querySelectorAll(`${this.imagesSelector}[data-slider-group-name='${groupName}']`);
                    const prototype = document.querySelector('.js-slider__thumbs-item--prototype');
                    const thumbsContainer = document.querySelector('.js-slider__thumbs');
                    
                    thumbsList.forEach((item) => {
                        const thumbElement = prototype.cloneNode(true);
                        thumbElement.classList.remove('js-slider__thumbs-item--prototype');
                        const thumbImg = thumbElement.querySelector('img');
                        thumbImg.src = item.querySelector('img').src;
                        if (thumbImg.src === src) {
                            thumbImg.classList.add('js-slider__thumbs-image--current');
                        }
                        thumbsContainer.appendChild(thumbElement);
                    });
                }

    onClose(event) {
        this.sliderRootElement.classList.remove('js-slider--active');
        const thumbsList = this.sliderRootElement.querySelectorAll('.js-slider__thumbs-item:not(.js-slider__thumbs-item--prototype)');
        thumbsList.forEach(item => item.remove());
    }
    // ...
}

**6. Code Modularity and Reusability**
The JSSlider class is designed to be modular and reusable, allowing for easy integration into various projects and enhancing code maintainability.

            export default class JSSlider {
                        constructor(imagesSelector) {
                        this.imagesSelector = imagesSelector;
                        this.sliderRootSelector = '.js-slider';
                        this.imagesList = document.querySelectorAll(this.imagesSelector);
                        this.sliderRootElement = document.querySelector(this.sliderRootSelector);
                        this.initEvents();
                        this.initCustomEvents();
                        }
                                        
                        // All methods and event handlers here
                        }
<br />
<br />

## 🛠️ Languages and Tools used: 

<img align="left" alt="JavaScript" width="50px" src="https://raw.githubusercontent.com/github/explore/379d8d145b878a5b7a1c2a5b5800b1d82d5c8c8f/topics/javascript/javascript.png" />

<img align="left" alt="HTML5" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />

<img align="left" alt="CSS3" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />

<img align="left" alt="Git" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />

<img align="left" alt="GitHub" width="50px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />

<img align="left" alt="Terminal" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<img align="left" alt="Visual Studio Code" width="50px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />

<br />
<br />
<br />
<br />

## :blue_heart:  You can find me on:
<br/>

[<img align="left" alt="Katarzyna Dworak LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />](https://www.linkedin.com/in/katarzynadworakk/)

 
<br />

### Thanks
To my Mentor - devmentor.pl – for creating the task and for the code review.
