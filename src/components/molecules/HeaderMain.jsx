import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

import Icon from '../atoms/LucideIcons';

function HeaderMain({ title }){

    return(
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{ title }</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <Button variant="outline-secondary">Compartilhar</Button>
                    {/* <button type="button" className="btn btn-sm btn-outline-secondary">Share</button> */}
                    <Button variant="outline-secondary">Exportar</Button>
                    {/* <button type="button" className="btn btn-sm btn-outline-secondary">Export</button> */}
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="d-flex align-items-center gap-1">
                        <Icon name="Calendar" />
                        Calendário
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Ontem</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Hoje</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Amanhã</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Esta semana</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Este mês</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                    <svg className="bi"><use xlink:href="#calendar3"/></svg> 
                    Essa semana
                </button> */}
            </div>
        </div>
    )

}

export default HeaderMain