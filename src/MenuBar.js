import React from 'react'
import { CommandBar, Dropdown, DefaultButton, TextField } from 'office-ui-fabric-react';
import './App.css';

function render_repositories() {
    return (
    <div>
        
        </div>
        )
}

const type_options = [
    { key: 'all', text: 'Type: All' }
  ];

  const language_options = [
    { key: 'all', text: 'Language: All' }
  ];

const _items = [
    {
      key: 'overview',
      text: 'Overview',
    },
    {
      key: 'repositories',
      text: 'Repositories',
      onClick: () => render_repositories()
    },
    {
      key: 'stars',
      text: 'Stars',
      onClick: () => console.log('Stars')
    },
    {
      key: 'followers',
      text: 'Followers',
      onClick: () => console.log('Followers')
    },
    {
        key: 'following',
        text: 'Following',
        onClick: () => console.log('Following')
      }
  ];


    const MenuBar = () => {
      return (
        <div className="menuBar">
            <CommandBar items={_items}/>
            <hr className="lineStyle"/>
            <div className="searchBar">
                <TextField className="textField" placeholder="Search repositories..."/>
                <Dropdown options={type_options} className="typeDropdown" defaultSelectedKey="all"/>
                <Dropdown options={language_options} className="languageDropdown" defaultSelectedKey="all"/>
                <DefaultButton text="New" className="buttonNew"/>
            </div>
      
        </div>
      )
    };

    export default MenuBar