import WorkerServicesPage from "@/Pages/Worker/Services/Index.jsx";
const Services = (props) => {
    return (
        <div>
            <WorkerServicesPage auth={props.auth} servicesAll={props.servicesAll} csrf_token={props.csrf_token} page={false} dealerPage/>
        </div>
    );
}
export default Services;
