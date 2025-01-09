import ItemBrandHeader from "../atoms/ItemBrandHeader"

function Header(){

    return(

        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <ItemBrandHeader company="Tráfego"/>
        </header>

    )

}

export default Header