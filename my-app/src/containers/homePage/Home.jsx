
import styled from "styled-components";
import Navbar from "../../components/OneForAll/Navbar"
import PopularBook from "../../components/Elements/PopularBook"
import SaleBooks from "../../components/Elements/Sale-book";
import Category  from "../../components/Elements/Category";
function Home(){

    return (
        <Section>
            <Navbar />
            <PopularBook/>
            <div className="sale_book row ">
                <div className="col-sm-2">
                    <Category />
                </div>
                <div className="col-sm-10">
                    <SaleBooks />
                </div>
            </div>
        </Section>
    )
}
export default Home;
const Section = styled.section`
     
`;