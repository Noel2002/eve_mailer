const getEmailTemplate = ({water, luminosity})=>{
 const template = `
    <!doctype html>

    <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>A Basic HTML5 Template</title>
        <meta name="description" content="A simple HTML5 Template for new projects.">
        <meta name="author" content="SitePoint">
        
        </head>
        
        <body >
            <div style="background-color: #3D8361; color: white; height:70px; width: 100%; display: flex; align-items: center;">
                <h2 style="font-size: 20px; padding-left: 20px;" >
                    CYBORG PLANT
                </h2>
            </div>
            <div style="padding:10px 20px;">
                <p style="font-size: 16px;">
                Dear Care taker,<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <table style="border-collapse: collapse; margin-top: 30px ">
                    <tr style="background-color: #3D8361; color: white;">
                        <th style="width: 200px; padding: 10px 0px; border: 1px solid white">Luminosity</th>
                        <th style="width: 200px; padding: 10px 0px; border: 1px solid white">Water</th>
                    </tr>
                    <tr style="background-color: white; color: black;">
                        <td style="width: 200px; padding: 10px 0px; border: 1px solid white"><center>${luminosity}</center></td>
                        <td style="width: 200px; padding: 10px 0px; border: 1px solid white"><center>${water}</center></td>
                    </tr>
                </table>
            
            </div>
            <div style="background-color: #3D8361; color: white; height:80px; width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 100px">
                Copyrights 2022, Project eve
            </div>
        
        </body>
    </html>
 
 `;
 return template;
}
export default getEmailTemplate;