import ItensOffcanvas from "../atoms/ItensOffcanvas"

function Offcanvas(){

    return (

        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <ItensOffcanvas itemName="Dashboard" iconName="House" className="bi"/>
            <ItensOffcanvas itemName="Atendimento" iconName="User" className="bi"/>
            <ItensOffcanvas itemName="Criativo" iconName="Palette" className="bi"/>
            <ItensOffcanvas itemName="Distribuição" iconName="ArrowLeftRight" className="bi"/>
            <ItensOffcanvas itemName="Relatórios" iconName="ChartColumn" className="bi"/>
            <ItensOffcanvas itemName="Cadastros" iconName="UserCog" className="bi"/>
            <ItensOffcanvas itemName="Configurações" iconName="Settings" className="bi"/>
          </ul>
        </div>
    )
}

export default Offcanvas