import { fromEvent, map, tap } from "rxjs"

const text = document.createElement('div')
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nulla porta, vestibulum ex vel, laoreet orci. Nullam id massa vitae turpis lobortis ornare. Suspendisse lobortis placerat justo, sit amet ornare risus consequat eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam eleifend semper elit. Nulla facilisi. Suspendisse lobortis libero ante, a tempus risus fermentum sit amet. Quisque quis nisl ex.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Donec bibendum at felis vel varius. Aenean interdum facilisis ultrices. Donec tincidunt justo ut sem pharetra lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus nisl ac nisl fringilla finibus. Sed consequat, nisi non scelerisque eleifend, turpis orci condimentum lectus, nec facilisis ex orci non est. Cras molestie eleifend augue eu malesuada. Donec et ligula quis metus ultrices fringilla in sed nibh. Cras vel cursus libero. In at imperdiet purus. Ut sodales turpis non mi molestie luctus. Vivamus scelerisque nunc vel elit maximus, ut fermentum neque blandit. In placerat nunc non justo dapibus, vitae posuere mauris efficitur.
<br /> <br />
Vivamus id justo at dolor efficitur blandit non in nulla. Maecenas cursus ac nisi ut eleifend. Duis in metus sed lorem dapibus maximus. Fusce congue elit turpis. Nunc vel tortor id augue mattis rutrum. Donec ante quam, porttitor sed convallis ut, rutrum id ligula. Aenean ipsum elit, varius et nunc non, aliquet elementum tellus. Nam rutrum turpis id ligula facilisis, pharetra facilisis dui mattis. Sed ornare leo in mollis pretium. Sed tincidunt ultricies nulla.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Duis dignissim semper lectus porta porttitor. Aenean elit nunc, semper id fringilla non, eleifend sed orci. Integer mattis consectetur nulla, vel pellentesque justo semper sit amet. Nam ultrices felis pellentesque, suscipit mauris vel, semper massa. Proin mattis ut turpis eu egestas. Donec nec rhoncus lectus. Aliquam erat volutpat. Nam non leo tincidunt, iaculis ipsum eget, eleifend diam. Nam turpis nulla, rutrum quis finibus eget, aliquet in metus. Etiam sit amet efficitur erat. Morbi magna dolor, sollicitudin ac ipsum ac, ultricies commodo est. Sed turpis nibh, porta quis justo condimentum, aliquam suscipit diam. Sed iaculis eros eget est vehicula, quis rhoncus nisl luctus. Vivamus sollicitudin orci a velit pharetra, quis varius quam vestibulum. Nullam maximus auctor tortor quis dignissim. Phasellus luctus cursus augue, ac sollicitudin metus sodales nec.
<br /> <br />
Morbi pretium tincidunt venenatis. Vivamus imperdiet ut velit eget suscipit. Cras massa ligula, hendrerit vel pretium in, vestibulum imperdiet ligula. Integer posuere, neque tristique faucibus accumsan, nulla nisl vulputate sem, sit amet varius dui ex id nunc. Duis felis purus, porttitor id nisl vel, congue vehicula augue. Donec eget finibus ante. Cras accumsan sapien felis, quis pulvinar sapien faucibus id. Nullam malesuada egestas aliquet. Donec varius elit vel ligula luctus euismod. Nulla facilisi. Ut vitae scelerisque odio, at vestibulum mauris. Integer pharetra scelerisque diam, commodo malesuada sapien maximus sit amet. Phasellus eget iaculis libero. Maecenas in ligula felis.
<br /> <br />
`

const body = document.querySelector('body')
body.appendChild(text)

const progressBar = document.createElement('div')
progressBar.classList.add('progress-bar')
body.appendChild(progressBar)

// Función para que calcule el progreso
const getProgress = ( event: any ) : number => {
  
  const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement

  return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// Streams
fromEvent( document, 'scroll' )
  .pipe(
    map( event => getProgress(event)),
    tap( console.log )
  )
  .subscribe( porcentage => {

    progressBar.style.width = `${porcentage}%`

  })