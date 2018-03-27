# GitHub Issues App - Layout

Assignment notes

## Layout

To center the main "window" horizontally and vertically `dislpay: flexbox` is used. If browser compatibility is a concern, `display: table` and additional markup with `display: table-cell` can be used.

Layout is flexible. It is not truly responsive but it will work well when browser window is smaller than `650px` width and `500px` height. It is done again with Flexbox. The alternative for horizontal scaling will be making columns proportional with percentage width or calculating `.content` (right column) width with CSS calc() function e.g. `calc(100% - 150px)`.

## Scrollbar

On platforms that use static, rectangular scrollbars rounded corners of the main "window" are hidden under, making the corners pointy. To remedy that the scroll bar is offset `10px` to the left. On platforms with transparent, hiding scrollbars the layout is not affected by the offset. The most elegant solution would be making a custom scrollbar.

## Images

Background image was compressed using JPEG Progressive with quality factor of 65 which usually gives most bang for the buck. That means it's a good compromise between quality and file size. In this case it reduced file size by nearly 70%. For `.sidebar` background image Gaussian blur filter of 5 pixels was applied and compressed with quality factor of 40. 

As some browsers does not fully support progressive JPEGs in CSS `background-image` attribute and display the image only when it is fully loaded, the site background is a blue color sampled from the image.

The star SVG icon was modified and made into a sprite image with two states, selected and not.
