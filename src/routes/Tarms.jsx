import React from 'react';
import { Link } from 'react-router-dom';

const Tarms = () => {
    return (
        <div>
            <h5>Terms and Condition</h5>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores adipisci tempora ex ea atque incidunt consequuntur dignissimos deserunt voluptas. Et temporibus quasi alias fugit placeat ut tempore, perferendis repellat, vero modi officia totam magni excepturi, blanditiis nobis quis ex? Aperiam consectetur provident molestiae eum ipsa veniam officia amet explicabo. Iure!
            </p> <br/>
            <p>
                Go Back <Link to='/resister' >Resister</Link>
            </p>

        </div>
    );
};

export default Tarms;