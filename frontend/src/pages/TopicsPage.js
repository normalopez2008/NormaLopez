function TopicsPage() {
    return (
       <>
            <h2>Web Development Concepts</h2>
            <nav class="local">  
                <a href="#servers">First</a>
                <a href="#frontend">Second</a>
                <a href="#optimizing">Third</a>
                <a href="#favicons">Fourth</a>
              </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>When referring to an <strong>index file</strong> on a website or server, it means 
                a file that is used as the web server's designated homepage. The 
                server will look for this specifically named file as your website's 
                main/home page or root directory and is mapped to the path /index.html. Web applications 
                are configured to return to this file when a GET request is received for <strong>/</strong>.
                </p>
                <p>In the Inspector Network tab output screen in a Chrome browser, you can see 
                the request header has the page's status which is <strong>200 OK</strong> which means there 
                was a successful response. The request method which is GET method, the header request URL was 
                https://web.engr.oregonstate.edu/~lopeznor/a2-lopeznor/index.html, IP address, policy, language, cache 
                instructions and browser version. The response header has the server date, 
                last-modified date, and server type. But, when inspecting the Inspector Network 
                tab output screen, there is a significant difference between viewing the 
                web server and the local computer output screen details. The local computer 
                details miss the IP address and all the information in the response and 
                request headers. 
                </p>
                <p>Since OSU server automatically provides a favicon, it will have a status 200 in the 
                Inspector Network tab output screen. Meaning there is an existing file for the 
                server to recognize. With request method GET and request URL https://web.engr.oregonstate.edu/favicon.ico.
                On the contrary, main.css and main.js have not had a file created
                and therefore the server will give a 404 error meaning the files were not found.
                </p>
                <p>https://web.engr.oregonstate.edu/~lopeznor/a1-lopeznor/
                The <strong>scheme</strong> of this URL is https://, the <strong>subdomain</strong> is web.engr., the <strong>host domain</strong> is 
                oregonstate.edu and the <strong>resources</strong> is /~lopeznor/a1-lopeznor/
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>Front end design is a crucial part of web developing, because the front end
                    design comes with the user in mind. The user needs to be able to interact with 
                    the product as smoothly as possible. Front end design also makes sure the visual 
                    design is appealing to the user, or run the risk of the user moving on to other products.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>    
                    <dd>Helps users meet their goal.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Users can perform tasks with the least number of steps.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>Users can easily access their goal by clicking or searching, and remember how to next time.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>User avoids accessibility and availability issues and makes sure the user will not run 
                        into roadblocks.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>Will fit the unique needs of the intended audience in content and design.</dd>
                </dl>
                <p>Page layout blocks help computers read the components of the page, such as a
                    header, nav, main, section of articles, asides, and a footer. A <strong>header</strong> element is used to define
                    a banner for a site and is uniform throughout the pages. The <strong>nav</strong> element is used to 
                    contain links to other pages. The <strong>main</strong> element is strictly informative and indicates
                    the primary block that holds content. The <strong>section</strong> element is used to define a group of content
                    that is related. The <strong>articles</strong> element is used inside the section element and defines 
                    a specific topic. The <strong>aside</strong> element is used to define content related to an article, such as 
                    a sidebar. The <strong>footer</strong> element is usually at the bottom of a page and typically holds legal information
                    and other important information about the website owner.
                </p>
                
            </article>
            <article id="optimizing">
                <h3>Optimizing images</h3>
                <p>
                    The six major specifications of images for the web are:
                    <ul>
                        <li>
                            <strong>Descriptive file name:</strong> this is used to improve search
                            engine optimization so search engines can easily sort through files when users
                            are searching for related images. The files names should be brief but descriptive
                            such as a boy holding a baseball bat should be named: boy-baseball-bat.jpg.
                        </li>
                        <li>
                            <strong>Small file size:</strong> this is used to serve high resolution images
                            to high resolution devices by reducing the file size to as small as possible for
                            the fastest load time.
                        </li>
                        <li>
                            <strong>Exact dimensions:</strong> this is used to crop and reduce the size of images.
                            In order for an image to load quickly it needs to fit the dimensions of the webpage.
                        </li>
                        <li>
                            <strong>Correct file format:</strong> images are supposed to be in correct file format
                            such as <strong>JPG</strong> which is most appropriate for online photos, 
                            <strong>.GIF or 8-bit .PNG</strong> which is most appropriate line-art suchs as logos, icons.
                            <strong>24-bit .PNG</strong> is used for graphics with true transparenncy.

                        </li>
                        <li>
                            <strong>Reduced resolution:</strong> this is required to render images on specific monitors
                            and ranges from 72 to 300+ pixels per inch.
                        </li>
                        <li>
                            <strong>Color mode:</strong> uses <strong>RGB</strong> for .PNG, .JPG, .SVG, and .WebP, 
                            and <strong>Indexed</strong> for .GIF.
                        </li>
                    </ul>
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    A favicon is a browser icon that makes a website recognizable and is usually 
                    seen next to a page's title on the browser tabs, address bars, bookmark lists, search
                    engine results page, toolbars, browser history, etc. Favicons are usefull when keeping 
                    track of tabs and makes a website look more professional overall.
                </p>
            </article>
        </>
    );
}
export default TopicsPage;