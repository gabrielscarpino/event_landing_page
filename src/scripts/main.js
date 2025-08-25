AOS.init();

const dataDoEvento = new Date("Jan 17, 2081 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime();

const contaOTempo = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const mesEmMS = 1000 * 60 * 60 * 24 * 30;
    const diasEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;
    const segundosEmMs = 1000

    const mesesAteOEvento = Math.floor(distanciaAteOEvento / mesEmMS);
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMS) / horaEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${mesesAteOEvento}m ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaOTempo);
        document.getElementById('contador').innerHTML = '0 segundos';
    }

}, 1000);
