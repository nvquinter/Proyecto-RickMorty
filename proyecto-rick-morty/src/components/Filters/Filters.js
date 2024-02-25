import { Fragment } from "react";
import Filter from "../Filter/Filter";
import filtIcon from './filter-icon.svg';

export default function Filters({filterCharacter}) {

    return(
        <Fragment>
            <section className='row section-filters py-5'>
                <div  className='filters-area d-flex  m-2 align-items-center'>
                    <h2>Filters</h2> 
                    <a className='btn btn-filters' data-bs-toggle="collapse" href="#collapseFilters" role="button" aria-expanded="false" aria-controls="collapseFilters">
                        <img src={filtIcon} alt="imagen filtro"/>
                    </a> 
                </div>
                <form className="collapse filters justify-content-between flex-wrap" id='collapseFilters'  >
                    <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                    <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                    <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                    <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                    <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
                </form>
            </section>
        </Fragment>

    )
}