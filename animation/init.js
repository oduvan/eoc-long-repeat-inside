//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        
        function longRepeatInsideCanvas(dom, input, answer) {

            const make_idxs = m=>{
                let wk_idxs = [];
                let off_set = 0; 
                while (m.length) {
                    const f = input.slice(off_set).indexOf(m);
                    if (f > -1) {
                        const t = f + m.length;
                        wk_idxs.push({'f': f+off_set, 't': t+off_set});
                        off_set += t;
                    } else {
                        break;
                    }
                };
                return wk_idxs;
            };

            const make_span = (tx, cls)=>{
                return $("<span></span>").text(tx).addClass(cls);
            };

            const reg = RegExp(answer);
            const mt = input.match(reg);
            const indexs = make_idxs(mt[0]).slice(0, 1);
            
            // add element
            let off_set = 0;
            indexs.forEach((idx, i)=>{
                dom.append(make_span(
                    input.slice(off_set, idx.f), 'normal'));
                dom.append(make_span(
                    input.slice(idx.f, idx.t), 
                    i%2 ? 'red_word_even': 'red_word_odd'));
                off_set = idx.t; 
            });
            dom.append(make_span(
                input.slice(off_set, input.length), 'normal'));

        }
        var $tryit;

        var io = new extIO({
            functions: {
                python: 'repeat_inside',
                js: 'repeatInside'
            },
            animation: function($expl, data){
                longRepeatInsideCanvas($expl, data.in, data.ext.answer);
            }
        });
        io.start();
    }
);
