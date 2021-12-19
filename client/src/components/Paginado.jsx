import React from 'react';
import styles from './Paginado.module.css'

export default function Paginado ({countriesPage, allCountries,paginado}) {
    const pageNumbers = [];

        for(let i=1; i<=Math.ceil(allCountries / countriesPage); i++){
            pageNumbers.push(i);
        }
    

    
    return(
        <nav className={styles.pageNumbers}>
            <ul className={styles.paginado}>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li className={styles.numbers} key={number}> 
                            <a onClick={() => paginado(number)} className={styles.number}>{number}</a>
                        </li>
                    ))
                }     
              
            </ul>

        </nav>
    )
}