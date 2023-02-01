
import { useState } from "react";
import "./addServicesCenter.scss"

function Select({ options, label }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function handleClick() {
    setOpen(!open);
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    setOpen(false);
  }

  return (
    <div onClick={handleClick} className="AddServicesCenterSelectContainer">
      <span >
        {label}
      </span>
      <div >
        <span style={{ marginRight: "20px", color:"#2a47aa",fontWeight:"600"}}> {selectedOption ? ` ${selectedOption}` : ""}</span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.88047 1.29006L6.00047 5.17006L2.12047 1.29006C1.73047 0.900059 1.10047 0.900059 0.710469 1.29006C0.320469 1.68006 0.320469 2.31006 0.710469 2.70006L5.30047 7.29006C5.69047 7.68006 6.32047 7.68006 6.71047 7.29006L11.3005 2.70006C11.6905 2.31006 11.6905 1.68006 11.3005 1.29006C10.9105 0.910059 10.2705 0.900059 9.88047 1.29006Z" fill="#D3D3D3" />
        </svg>
      </div>
      {open && (
        <div className="AddServicesCenterSelectOptions">
          {options.map((option) => (
            <span key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}


export default function AddServicesCenter(props) {
  const categories = ["category 1", "category 2", "category 3", "category 4"];
  const subCategories = ["sub-category 1", "sub-category 2", "sub-category 3", "sub-category 4"];
  const locations = ["location 1", "location 2", "location 3", "location 4"];
  const price = ["price 1", "price 2", "price 3", "price 4"];
  const unit = ["unit 1", "unit 2", "unit 3", "unit 4"];


  return (
    <div className="AddServicesCenter">
      <div className="AddServicesCenterItem">
        <div className="AddServicesCenterItemTop">
          <span>
            Hi, Add your services
          </span>
          <p>
            Amet minim molit non deserunt ullamco .
          </p>
        </div>
        <div className="AddServicesCenterItemBottom">


          <div className="AddServicesCenterInputWrap">
            <div className="AddServicesCenterInputcontainer">
              <input autoComplete="off" className="AddServicesCenterInput" type="text" placeholder=" " />
              <label className="AddServicesCenterPlaceholder">Service Name</label>
            </div>
            <Select options={categories} label="Select a category" />
            <Select options={subCategories} label="Select a sub-category" />
            <Select options={locations} label="Select a location" />

          </div>
          <div className="AddServicesCenterAddPricing">
            <span >Add Pricing</span>
            <div >
              <Select options={price} label="Select a Price" />
              <Select options={unit} label="Select a Select Unit" />
            </div>
            <span style={{ alignSelf: 'flex-end', color: "#5D70D8",fontSize:'14px',fontWeight:'500' }}>+ Add Attributes</span>
          </div>
         

        </div>

      </div>
      <div className="AddServicesCenterButton">
        <button className="AddServicesCenterButtonFirst">Cancel</button>
        <button className="AddServicesCenterButtonSec">Add Service</button>
      </div>

    </div>
  )
}
