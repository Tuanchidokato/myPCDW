import styled from "styled-components";
import Logo from "../../assets/Logo.svg"
import Book from "../../assets/bx_bx-book-heart.svg"
import Diamond from "../../assets/ic_round-notifications-none.svg"
import Bell from "../../assets/fluent_premium-person-20-regular.svg"
import User from "../../assets/user.svg"
function Navbar(){

    return(
        <Nav>
            <div class="my_navbar ">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 Logo_section">
                        <img src={Logo} alt="" />
                        <p className="title_logo"><span className="title_logo_1">KeazoN</span><span className="title_logo_2">BOOKS</span></p>
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 search_section">
                       <i className="fa fa-search"></i>
                        <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes..."/>
                    </ul>

                    <div class="col-md-3 text-end login_section">
                       <img src={Book} alt="" />
                       <img src={Diamond} alt="" />
                       <img src={Bell} alt="" />
                       <img src={User} alt="" />
                    </div>
                </header>
            </div>
            <nav class="navbar navbar-expand-sm justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Detective</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Love</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Novel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Science fiction</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fantastic</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">More</a>
                    </li>
                    
                </ul>
            </nav>
        </Nav>
    )
}
export default Navbar;
const Nav= styled.nav`
      background-color: #2C2828;
 
    .my_navbar{
        margin: auto;
        background: #292828;
    } 
    .Logo_section{
        color:#D2D2D2;
        text-decoration: none;
        margin-left: 40px;
        img{
            width: 100px;
            height: 54.92px;
            
        }
        p{
            .title_logo_1{
                font-family: 'Varela';
                font-style: normal;
                font-weight: 400;
                font-size: 35px;
                line-height: 46px;
                color: #FFFFFF;
            }

            .title_logo_2{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 100;
                font-size: 20px;
                line-height: 23px;
                color: #FFFFFF;


            }
        }
    }
    .search_section{
        color: #242121;
        i{
            font-size: 25px;
            margin-top: 3px;
            position: absolute;
            margin-right: 450px;
            color: #808080;

        }
        input{
            width: 500px;
            height: 33px;
            border: none;
            border-radius: 5px;
            opacity: 30%;
            background-color: #373737;
            padding-left: 50px;
            ::placeholder{
                color: #D2D2D2;
                 
                font-size: 14px;
            }
        }
    }
    .login_section{
        img{
            margin-right:20px;
            width: 10%;
        }
    }
    .nav-link{
        font-size: 20px;
        color: #FFFFFF;
        margin-top: -20px;


    }
`;