# KimiUso FanPage ( *unofficial* )

> [!NOTE]
> This project is not intened for commercial gain, but rather for educational
> and academic purpose.

This [repository][repo-link] contains the source code of 1<sup>st</sup> Semester
**Final Project** for FrontEnd Development Lab conducted by *Professor **Maya Thapa***.
The project showcases the practical application of concepts and skills acquired during
the course, including **HTML**, **CSS** and *JavaScript*[^1]. It represents our progress
and learning journey in the fields of frontend development under *Professor Maya
Thapa*.

> [!IMPORTANT]
> This repository has undergone some changes after the project submisson was made.
> If you are here for project evaluation please view: [b83b89e](https://github.com/skarFubatsu/kimi-uso-fan-page/tree/b83b89ee82b9292f38a043d2aee1373728434575
> "Code submitted as hard copy")

## Introduction

This GitHub project is a tribute to the beloved anime, inspired by the captivating
characters and the soul-stirring melodies that resonate within the hearts of the
fans. Dive into the essence of **"Shigatsu wa Kimi no Uso"** with this *Front-End
Project* that brings the magic of the anime to life. Immerse yourself in the visually
appealing and thematically rich design, celebrating the profound connections and
relatable emotions portrayed by the characters.

As a fan, I couldn't resist the urge to create a space that pays homage to the anime's
profound impact on emotions and relationships. The characters' journeys are not just
stories; they are echoes of our own experiences, making this project a heartfelt
exprssion of admiration.

___

## Installation

1) Open terminal and clone this repository using git

    ```shell
    $ git clone https://github.com/skarFubatsu/kimi-uso-fan-page.git
    # Output:
    Cloning into 'kimi-uso-fan-page'...
    remote: Enumerating objects: 248, done.
    remote: Counting objects: 100% (248/248), done.
    remote: Compressing objects: 100% (169/169), done.
    remote: Total 248 (delta 89), reused 206 (delta 50), pack-reused 0
    Receiving objects:  94% (234/248), 29.79 MiB | 7.35 MiB/s
    Receiving objects: 100% (248/248), 30.04 MiB | 7.38 MiB/s, done.
    Resolving deltas: 100% (89/89), done.
    ```

1) Navigate to repository directory.

    ```shell
    $ cd kimi-uso-fan-page
    # Output: nothing
    ```

1) You can simply open `index.html` in your preferred browser, however you might
   encounter `Cross-Origin Request Blocked` on some pages.
   To avoid such cases, use the following alternative methods:

    - **VS code**

        1) You need to install any one of the following extensions:

            - [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
            - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

        1) Open the repository folder in VS code.

        1) Open `index.html` in editor and right-click, then select `Show Preview`
           or `Go Live` (for LiveServer, refer docs of respective extensions if
           any problem is occurred during the launch).

        1) You can select `Open in Browser` from top right hamburger menu to view
           in browser.

    - **Node.js**

        1) Install node.js: <https://nodejs.org/en/>

        1) Go to repository folder and install http-server

            ```shell
            $ npm install http-server -g
            # Output:

            added 44 packages in 6s

            14 packages are looking for funding
              run `npm fund` for details
            ```

        1) Run following command to start a server.

            ```shell
            $ http-server core
            Starting up http-server, serving core
            ```

        1) If all went well, you can visit the website on links provided under
            `Available on:` in terminal or just visit `http://localhost:8080/`
            in your browser.

        1) Use `Crtl + C` to stop server once you are done.

    - **Python3**

        1) Have python already installed on your system. Verify by using following
            command:

            ```shell
            $ python -V
            # Output:
            Python 3.11.4
            ```

        1) Navigate to repository folder and run the following command:

            ```shell
            $ python3 -m http.server 8080 -d core
            # Output:
            Serving HTTP on :: port 8080 (http://[::]:8080/) ...    
            ```

        1) Once the server is up-and-running, visit `http://localhost:8080/` to
            view website.

        1) Use `Shift + Ctrl + C` to stop the server.

___

## Features

- Fixed Navigation bar contains `Home`, `Characters`, `Forum`, and `About` where
  active tabs are highlighted.
- Fade and Slide animation for landing page by using CSS and JQuery.
- Blurs spoiler text until hovered.
- Auto populate character and comments data from `.json` file by using ajax, JQuery.
- 'Post Comment' form is made functional by manipulating DOM elements, form default
  behaviour with use of JavaScript.
- About page fetches data from github and displays.

___

## Screenshots

### Home

![Landing Page](core/assets/readme/landing-1.png)

![Landing Page Part 2](core/assets/readme/landing-2.png)

![Landing Page Part 3](core/assets/readme/landing-3.png)

![Landing Page Part 4](core/assets/readme/landing-4.png)

![Landing Page Part 5](core/assets/readme/landing-5.png)

### Characters

![Characters Page](core/assets/readme/chars-1.png)

![Characters Page Part 2](core/assets/readme/chars-2.png)

![Characters Page Part 3](core/assets/readme/chars-3.png)

#### Character Information

![Character Information](core/assets/readme/char-1.png)

![Character Information Part 2](core/assets/readme/char-2.png)

![Character Information Part 3](core/assets/readme/char-3.png)

![Character Information Part 4](core/assets/readme/char-4.png)

### Forum

![Forum](core/assets/readme/forum-1.png)

![Forum Part 2](core/assets/readme/forum-2.png)

![Forum Part 3](core/assets/readme/forum-3.png)

![Forum Part 4](core/assets/readme/forum-4.png)

### About

![About](core/assets/readme/about.png)

___

## License

This project is licensed under [MIT License](./LICENSE)

___

[repo-link]: https://github.com/skarFubatsu/kimi-uso-fan-page "Kimi Uso FanPage"

[^1]: While JavaScript wasn't included in the curriculum for the current semester, I
took the initiative to learn and implement it to enrich my project.
