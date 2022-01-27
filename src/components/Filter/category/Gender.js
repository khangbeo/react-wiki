import FilterBTN from "../FilterBTN";

export default function Gender({ setGender, setPageNumer }) {
    let genders = ['female', 'male', 'genderless', 'unknown']
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls="collapseThree"
                >Gender</button>
            </h2>
        </div>
    )
}