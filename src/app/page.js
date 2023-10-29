'use client'


import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [names, setNames] = useState([{ name: 'John', email: 'john@example.com', date: '2022-10-29' }]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleAddNew = () => {
    setSelected('new');
  };

  const handleUpdate = () => {
    const updatedNames = [...names];
    updatedNames[selected] = { name: newName, email: newEmail, date: new Date().toISOString().split('T')[0] };
    setNames(updatedNames);
  };

  const handleSaveNew = () => {
    setNames([...names, { name: newName, email: newEmail, date: new Date().toISOString().split('T')[0] }]);
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      padding: '20px',
    },
    sidebar: {
      width: '30%',
      borderRight: '1px solid #ccc',
      paddingRight: '20px',
    },
    main: {
      width: '70%',
      paddingLeft: '20px',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      width: '80%',
    },
    button: {
      padding: '10px 20px',
      margin: '10px 0',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul>
          {names.map((item, index) => (
            <li key={index} onClick={() => { setSelected(index); setNewName(item.name); setNewEmail(item.email); }}>
              {item.name} ({item.date})
            </li>
          ))}
        </ul>
        <button style={styles.button} onClick={handleAddNew}>Add New</button>
      </div>
      <div style={styles.main}>
        {selected === null ? (
          <h1>Welcome</h1>
        ) : (
          <>
            <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} style={styles.input} />
            <input type="email" placeholder="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} style={styles.input} />
            <button onClick={selected === 'new' ? handleSaveNew : handleUpdate} style={styles.button}>
              {selected === 'new' ? 'Save New' : 'Update'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
