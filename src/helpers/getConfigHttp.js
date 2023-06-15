
const  getConfigHttp = () =>(
     {

        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
)
export default getConfigHttp