import React from "react";
import "./orderhistory.css";

function OrderHistory() {
    return (
        <div>
            <h2> Your Past Orders</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
        </div>
    );

}

export default OrderHistory;