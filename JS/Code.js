        function check(jurusan){
            var pil1 = document.getElementsByClassName("select1");
            var pil2 = document.getElementsByClassName("select2");
            var pil3 = document.getElementsByClassName("select3");
            if(jurusan=="ipa"){
                for(var i=0;i<pil1.length;i++){pil1[i].innerHTML = "Fisika :";pil2[i].innerHTML="Kimia :"; pil3[i].innerHTML="Biologi :";}
            } else {
                for(var i=0;i<pil1.length;i++){pil1[i].innerHTML = "Ekonomi :"; pil2[i].innerHTML = "Geografi :";pil3[i].innerHTML = "Sosiologi :";}
            }
        }

        function show(){
            var jml_soal = document.getElementById("jumlahsoal").value;
            var newline = document.createElement("br");
            var newinput = document.createElement("input");
            for(int i=1;i<=jml_soal;i++){
                document.getElementsByClassName("essay").appendChild(newline);
                var newinput = document.createElement("input");
            }
        }
        
        function allFilled(x, y){
            var i = 0, j = 0;
            while(i < x.length && j < y.length){
                if(x[i++]==""||y[j++]=="") return false;
            }
            while(i<x.length){
                if(x[i++]=="") return false;
            }
            while(j<y.length){
                if(y[j++]=="") return false;
            }
            return true;
        }

        function allInRange(x, y){
            var i=0, j=0;
            while(i < x.length && j < y.length){
                if(!inRange(x[i++])||!inRange(y[j++])) return false;
            }
            while(i<x.length){
                if(!inRange(x[i++])) return false;
            }
            while(j<y.length){
                if(!inRange(y[j++])) return false;
            }
            return true;
        }

        function inRange(score){
            return score>=0 && score<=100;
        }

        function hitungNilaiSMP(){
            var pass = false;
            var school1 = document.getElementById("school1").value;
            var school2 = document.getElementById("school2").value;
            var UN1 = []; 
            var UN2 = [];
            /*Sekolah yang pertama*/
            UN1[0] = document.getElementById("bind1").value;
            UN1[1] = document.getElementById("mat1").value;
            UN1[2] = document.getElementById("bing1").value;
            UN1[3] = document.getElementById("ipa1").value;
            /*Sekolah yang kedua*/
            UN2[0] = document.getElementById("bind2").value;
            UN2[1] = document.getElementById("mat2").value;
            UN2[2] = document.getElementById("bing2").value;
            UN2[3] = document.getElementById("ipa2").value;
            if(school1=="" || school2==""){alert("Harus diisi");}
                /*Kalau ada yang kosong*/
                if(!allFilled(UN1, UN2)){
                    alert("Harus diisi");
                }
                /*Kalau nilainya ada yang kurang dari 0 atau lebih dari 100*/
                if(!allInRange(UN1, UN2)){
                    alert("Mohon maaf, nilai yang anda masukkan tidak sesuai");
                }
                if(allFilled(UN1,UN2)&& allInRange(UN1, UN2)){
                    pass = true;
                }
            /*Menghitung nilai masing-masing sekolah*/
            if(pass){
            var avg1, avg2;
            for(var i=0;i<4;i++){
                avg1+=UN1[i];
                avg2+=UN2[i];
            }
            /*Mengecek rata-rata UN*/
            if(avg1>avg2){
                document.getElementById("result").innerHTML = "Nilai UN di "+school1+" lebih tinggi dibandingkan di "+school2+".";
            } else if (avg1<avg2){
                document.getElementById("result").innerHTML = "Nilai UN di "+school2+" lebih tinggi dibandingkan di "+school1+".";
            } else {
                document.getElementById("result").innerHTML = "Kebetulan Nilai UN di "+school1+" sama dengan "+school2+".";
            }
        } else {
            document.getElementById("result").innerHTML = "";
        }
    }

        function hitungNilai(){
            var pass = false;
            var school1 = document.getElementById("school1").value;
            var school2 = document.getElementById("school2").value;
            var UN1 = []; 
            var UN2 = [];
            /*Sekolah yang pertama*/
            UN1[0] = document.getElementById("bind1").value;
            UN1[1] = document.getElementById("mat1").value;
            UN1[2] = document.getElementById("bing1").value;
            UN1[3] = document.getElementById("pil1-1").value;
            UN1[4] = document.getElementById("pil2-1").value;
            UN1[5] = document.getElementById("pil3-1").value;
            /*Sekolah yang kedua*/
            UN2[0] = document.getElementById("bind2").value;
            UN2[1] = document.getElementById("mat2").value;
            UN2[2] = document.getElementById("bing2").value;
            UN2[3] = document.getElementById("pil1-2").value;
            UN2[4] = document.getElementById("pil2-2").value;
            UN2[5] = document.getElementById("pil3-2").value;
            if(school1=="" || school2==""){alert("Harus diisi");}
                /*Kalau ada yang kosong*/
                if(!allFilled(UN1, UN2)){
                    alert("Harus diisi");
                }
                /*Kalau nilainya ada yang kurang dari 0 atau lebih dari 100*/
                if(!allInRange(UN1, UN2)){
                    alert("Mohon maaf, nilai yang anda masukkan tidak sesuai");
                }
                if(allFilled(UN1,UN2)&& allInRange(UN1, UN2)){
                    pass = true;
                }
            /*Menghitung nilai masing-masing sekolah*/
            if(pass){
            var avg1, avg2;
            for(var i=0;i<6;i++){
                avg1+=UN1[i];
                avg2+=UN2[i];
            }
            /*Mengecek rata-rata UN*/
            if(avg1>avg2){
                document.getElementById("result").innerHTML = "Nilai UN di "+school1+" lebih tinggi dibandingkan di "+school2+".";
            } else if (avg1<avg2){
                document.getElementById("result").innerHTML = "Nilai UN di "+school2+" lebih tinggi dibandingkan di "+school1+".";
            } else {
                document.getElementById("result").innerHTML = "Kebetulan Nilai UN di "+school1+" sama dengan "+school2+".";
            }
        } else {
            document.getElementById("result").innerHTML = "";
        }
        }