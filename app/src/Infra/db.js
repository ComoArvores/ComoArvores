import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.testTb');

export function buscarDado () {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM events', null,
            (txObj, { rows: { _array } }) => this.setState({ dado: _array }),
            (txObj, error) => console.log('Erro: ', error)
        )
    })
}