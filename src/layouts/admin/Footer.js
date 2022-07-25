import React  from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer ClassName="py-4 bg-light mt-auto">
            <div ClassName="container-fluid px-4">
                <div ClassName="d-flex align-items-center justify-content-between small">
                    <div ClassName="text-muted">Copyright &copy; Your Website 2022</div>
                    <div>
                        <Link to="#">Privacy Policy</Link>
                        &middot;
                        <Link to="#">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;