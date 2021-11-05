import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretRight,
    faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";

const Accordion = ({ items }) => {
    const [para, setPara] = useState(-1);

    return <div className=" primary accordion">
        {items.map(({ header, body }, index) => {
            return (
                <div key={index}>
                    <div className="header" onClick={() => para === index ? setPara(-1) : setPara(index)}>
                        {para === index
                            ? <FontAwesomeIcon className='icon' icon={faCaretDown} />
                            : <FontAwesomeIcon className='icon' icon={faCaretRight} />
                        }
                        {header}
                    </div>
                    { para === index ? <p className="content">{body}</p> : null}
                </div>
            )
        })}
    </div>
}

export default Accordion;