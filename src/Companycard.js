export const CompanyCard=(props)=>{
    console.log(props)
return(
    <>
    
  <div className="card rounded my-3 mx-auto  d-block border border-3 border border-secondary" id={props.Link}>
  <img   className="img-fluid rounded-top"  src={props.Img} class="card-img-top" />
  <div className="card-body text-center">
    <h5 className="card-title ">{props.Name}</h5>
    
  </div>
</div>
    </>
)
}