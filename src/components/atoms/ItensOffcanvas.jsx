import Icon  from './LucideIcons';

function ItensOffcanvas({ itemName, iconName }){

    return(
        <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
            <Icon name={ iconName } />
            {/* <svg className="bi"><use xlink:href="#house-fill"/></svg> */}
            { itemName }
            </a>
        </li>
    )

}

export default ItensOffcanvas