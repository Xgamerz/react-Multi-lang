import React, { useState, useEffect } from 'react';
import { Theme } from './models/Theme';
import { Language, Resources } from './models/Resource'

interface IProps {
    language: Language
}

const Search: React.FC<IProps> = (props) => {
    
    let [theme, setTheme] = useState<Theme>();

    const fetchItems = async () => {
        //const rawData = await fetch('https://reqres.in/api/users?page=2');
        //const jData = await rawData.json();
        //console.log(jData.data);
        // setGrid();
    }

    useEffect(() => {
        fetchItems();
    }, []);

    const changeTheme = (e: any) => {
        const index = Theme.Themes.map((item) => {return item.id;}).indexOf(e.target.value);
        if (index > -1) {            
            setTheme(Theme.Themes[index]);
        }
        else {
            setTheme(undefined);
        }
    }

    return (
        <section className="row my-5">
            <article className="col-md-12">
                <div className="card m-1 p-1 shadow">
                    {/* <img src={logo} alt="title image" className="card-img-top w-50 d-block mx-auot" width="512px" /> */}
                    <div className="card-body text-center">
                        <h4>{Resources.dictionary[props.language]["search.qst.search"].value}</h4>
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <p className="card-text mx-3">{Resources.dictionary[props.language]["search.msg.fill"].value}</p>
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <div className="row mt-3">
                            <div className="col-md-3 offset-md-3"><label><strong>{Resources.dictionary[props.language]["search.titlepress"].value} : </strong> </label></div>
                            <div className="col-md-4"><input type="text" className="form-control" /></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3 offset-md-3"><label><strong>{Resources.dictionary[props.language]["general.theme"].value} : </strong></label></div>
                            <div className="col-md-4">
                                <select className="browser-default custom-select" onChange={changeTheme}>
                                    <option value="" defaultValue={""}>{Resources.dictionary[props.language]["search.select.theme"].value}</option>
                                    {
                                        Theme.Themes.map((item)=>{
                                            return <option key={item.id} value={item.id}>{item.label}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3 offset-md-3"><label><strong>{Resources.dictionary[props.language]["general.subtheme"].value} : </strong></label></div>
                            <div className="col-md-4">
                                <select className="browser-default custom-select">
                                    <option defaultValue={""}>{Resources.dictionary[props.language]["search.select.subtheme"].value}</option>
                                    {
                                        Array.from<Theme>(theme == undefined ? [] : theme.subThemes).map((item) => {
                                            return <option key={item.id} value={item.id}>{item.label}</option>
                                        })
                                    }
                                </select>                                
                            </div>
                        </div>
                        <div className="advenced-search">
                            <div className="row mt-3">
                                <div className="col-md-3 offset-md-3"><label>{Resources.dictionary[props.language]["general.country"].value} : </label></div>
                                <div className="col-md-4">
                                    <select className="browser-default custom-select">
                                        <option defaultValue={""}>{Resources.dictionary[props.language]["search.select.country"].value}</option>
                                    </select>                                
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-3 offset-md-3"><label>{Resources.dictionary[props.language]["general.lang"].value} : </label></div>
                                <div className="col-md-4">
                                    <select className="browser-default custom-select">
                                        <option defaultValue={""}>{Resources.dictionary[props.language]["search.select.lang"].value}</option>
                                    </select>                                
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-3 offset-md-3"><label>{Resources.dictionary[props.language]["general.codif"].value} : </label></div>
                                <div className="col-md-4"><input type="text" className="form-control" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-3 offset-md-3"><label>{Resources.dictionary[props.language]["general.order"].value} : </label></div>
                                <div className="col-md-4">
                                    <select className="browser-default custom-select">
                                        <option value={"1"}>{Resources.dictionary[props.language]["general.title"].value}</option>
                                        <option value={"2"}>{Resources.dictionary[props.language]["general.theme"].value}</option>
                                        <option value={"3"}>{Resources.dictionary[props.language]["general.subtheme"].value}</option>
                                        <option value={"4"}>{Resources.dictionary[props.language]["general.codif"].value}</option>
                                    </select>                                
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-3 offset-md-6 text-right">
                                    <div><label><strong>{Resources.dictionary[props.language]["search.allcatalog"].value} : </strong><input type="checkbox" /></label></div>
                                    <div><label>{Resources.dictionary[props.language]["search.withsite"].value} : <input type="checkbox" /></label></div>
                                    <div><label>{Resources.dictionary[props.language]["search.titleexport"].value} : <input type="checkbox" /></label></div>
                                </div>
                                <div className="col-md-1 ">
                                    <img src="/images/search-doc.png" alt="" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </section>
    );
}

export default Search