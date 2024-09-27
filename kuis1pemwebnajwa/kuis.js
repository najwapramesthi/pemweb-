document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    
    const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
        background-color: #FFFFFF; /* changed to white background */
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th, td {
        border: 1px solid #000000; /* changed to black border */
        padding: 8px;
        text-align: left;
        transition: background-color 0.3s;
    }
    th {
        background-color: #000000; /* changed to black background */
        color: #FFFFFF; /* changed to white text */
    }
    tr:nth-child(even) {
        background-color: #F7F7F7; /* changed to light gray background */
    }
    .aksi a {
        padding: 5px 10px;
        background-color: #000000; /* changed to black background */
        color: #FFFFFF; /* changed to white text */
        text-decoration: none;
        border-radius: 5px;
    }
`;
document.head.appendChild(style);

    
    const tableSection = document.createElement('div');
    tableSection.innerHTML = `
        <table id="data-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Kelas</th>
                    <th>Angkatan</th>
                    <th>Program Studi</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;
    app.appendChild(tableSection);

    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    
    const studentsData = [{
            nama: "Najwa Lutfi",
            nim: "2300923",
            kelas: "A",
            angkatan: "2023",
            programStudi: "Sistem Informasi Kelautan A",
            link: "#"
        },
        {
            nama: "Alia Selvi",
            nim: "23091023",
            kelas: "B",
            angkatan: "2023",
            programStudi: "Sistem Informasi Kelautan",
            link: "#"
        },
        {
            nama: "Audhi Ramadani",
            nim: "23098878",
            kelas: "B",
            angkatan: "2023",
            programStudi: "Sistem Informasi Kelautan A",
            link: "#"
        },
        {
            nama: "Sila Serilda",
            nim: "2309888",
            kelas: "A",
            angkatan: "2023",
            programStudi: "Sistem Informasi Kelautan A",
            link: "#"
        },
        {
            nama: "Nabil Bukhari",
            nim: "23997656",
            kelas: "A",
            angkatan: "2023",
            programStudi: "Sistem Informasi Kelautan A",
            link: "#"
        }
    ];

    
    studentsData.forEach((data, index) => {
        const row = dataTable.insertRow();

        
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = data.nama;
        row.insertCell().textContent = data.nim;
        row.insertCell().textContent = data.kelas;
        row.insertCell().textContent = data.semester;
        row.insertCell().textContent = data.programStudi;

        
        const aksiCell = row.insertCell();
        aksiCell.classList.add('aksi');
        const linkElement = document.createElement('a');
        linkElement.href = data.link;
        linkElement.textContent = 'Profile';
        linkElement.target = '_blank';
        aksiCell.appendChild(linkElement);

        
        if (index === 0) {
            aksiCell.addEventListener('mouseover', () => {
                aksiCell.style.backgroundColor = '#FFB6C1'; 
            });
            aksiCell.addEventListener('mouseout', () => {
                aksiCell.style.backgroundColor = ''; 
            });
        }

        
        if (index === 1) {
            aksiCell.addEventListener('mouseenter', () => {
                aksiCell.style.transform = 'scale(1.1)'; 
            });
            aksiCell.addEventListener('mouseleave', () => {
                aksiCell.style.transform = 'scale(1)'; 
            });
        }

       
        if (index === 2) {
            aksiCell.addEventListener('click', () => {
                row.remove(); 
            });
        }

       
        if (index === 3) {
            aksiCell.addEventListener('mouseenter', () => {
                aksiCell.style.backgroundColor = '#FFB6C1'; 
            });
        }

        
        if (index === 4) {
            aksiCell.addEventListener('click', () => {
                aksiCell.style.transform = 'scale(1.1)'; 
                aksiCell.style.transition = 'transform 0.3s'; 

                
                setTimeout(() => {
                    aksiCell.style.transform = 'scale(1)'; 
                }, 300);
            });
        }
    });
});