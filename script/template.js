class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg" id="navSection">
      <div class="mx-4 container-fluid">
        <img src="/img/icon.png" alt="brand-icon" class="brand-icon" />
        <a class="navbar-brand mx-1 fw-bold" href="/"
          ><span class="cde">Code</span><span class="dot">.</span
          ><span class="i">i</span><span class="ibg">Blogger</span></a
        >
        <button
          class="navbar-toggler"
          id="nav-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/syllabus.html" target="_blank"
                >Syllabus</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/#subjects">Subjects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#faq">FAQs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog.html">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/policy.html">Policy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
          <!-- <form class="d-flex align-items-center">
            <input
              class="form-control me-2 bg-light bg-opacity-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
              type="submit"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </form> -->
        </div>
      </div>
    </nav>

        `
        
    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="py-3 mt-4">
        <ul
          class="nav justify-content-center border-bottom pb-3 mb-3 column-gap-3"
        >
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="black"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
              <path
                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"
              />
            </svg>
          </a>
  
          <a href="https://swadhin.dorik.io/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="black"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </a>
  
          <a href="https://github.com/SwadhinPanda" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="black"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          
          <a href="https://linkedin.com/in/swadhin-panda" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="black"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </a>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            />
          </svg>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-share-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
            />
          </svg>
        </ul>
        <p class="text-center mb-0">© 2023 Code.iBlogger</p>
        <p class="text-center text-muted font-monospace mb-1">
          Developed by Swadhin Panda
        </p>
      </footer>
    `
        
    }
}
customElements.define('my-footer', MyFooter)

class JavaGoto extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <div class="goto-links">
        <h6>Go to Program No.</h6>
        <div>
          <a href="java1.html">1</a>
          <a href="java2.html">2</a>
          <a href="java3.html">3</a>
          <a href="java4.html">4</a>
          <a href="java5.html">5</a>
          <a href="java6.html">6</a>
          <a href="java7.html">7</a>
          <a href="java8.html">8</a>
          <a href="java9.html">9</a>
          <a href="java10.html">10</a>
          <a href="java11.html">11</a>
          <a href="java12.html">12</a>
        </div>
          <div>
            
          <a href="java13.html">13</a>
          <a href="java14.html">14</a>
          <a href="java15.html">15</a>
          <a href="java16.html">16</a>
          <a href="java17.html">17</a>
          <a href="java18.html">18</a>
          <a href="java19.html">19</a>
          <a href="java20.html">20</a>
        </div>
      </div>`
  }
}
customElements.define('java-go', JavaGoto)


class CGoto extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <div class="goto-links">
        <h6>Go to Program No.</h6>
        <div>
          <a href="c1.html">1</a>
          <a href="c2.html">2</a>
          <a href="c3.html">3</a>
          <a href="c4.html">4</a>
          <a href="c5.html">5</a>
          <a href="c6.html">6</a>
          <a href="c7.html">7</a>
          <a href="c8.html">8</a>
          <a href="c9.html">9</a>
          <a href="c10.html">10</a>
          <a href="c11.html">11</a>
          <a href="c12.html">12</a>
        </div>
          <div>
            
          <a href="c13.html">13</a>
          <a href="c14.html">14</a>
          <a href="c15.html">15</a>
          <a href="c16.html">16</a>
          <a href="c17.html">17</a>
          <a href="c18.html">18</a>
          <a href="c19.html">19</a>
          <a href="c20.html">20</a>
        </div>
      </div>`
  }
}
customElements.define('c-go', CGoto)
