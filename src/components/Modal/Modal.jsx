import React from 'react';

const Modal = (props) => {
  console.log(props.data);
  // props.data.map((item, index) => {
  //   const { title, info, img } = item;
  //   console.log(title, info, img);
  //   return (
  //     <>
  //       <div
  //         key={index}
  //         className="portfolio-modal modal fade"
  //         id={`$portfolioModal${index + 1}`}
  //         tabIndex="-1"
  //         aria-labelledby="portfolioModal1"
  //         aria-hidden="true">
  //         <div className="modal-dialog modal-xl">
  //           <div className="modal-content">
  //             <div className="modal-header border-0">
  //               <button
  //                 className="btn-close"
  //                 type="button"
  //                 data-bs-dismiss="modal"
  //                 aria-label="Close">
  //               </button>
  //             </div>
  //             <div className="modal-body text-center pb-5">
  //               <div className="container">
  //                 <div className="row justify-content-center">
  //                   <div className="col-lg-8">

  //                     <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>
  //                     <div className="divider-custom">
  //                       <div className="divider-custom-line"></div>
  //                       <div className="divider-custom-icon">
  //                         <i className="fas fa-star"></i>
  //                       </div>
  //                       <div className="divider-custom-line"></div>
  //                     </div>
  //                     <img className="img-fluid rounded mb-5" src={img} alt="..." />
  //                     <p className="mb-4">{info}</p>
  //                     <button className="btn btn-primary" data-bs-dismiss="modal">
  //                       <i className="fas fa-xmark fa-fw"></i>
  //                       Close Window
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // });

  return (
    <>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex="-1"
        aria-labelledby="portfolioModal1"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close">
              </button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">

                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="../../assets/img/portfolio/cabin.png" alt="..." />
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, beatae?</p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Modal;