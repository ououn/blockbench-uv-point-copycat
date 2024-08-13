(function() {
    var storedspls = [0,0,-1];
    var button_c;
    var button_p;
    var button_q;

    function getUVPointpls(){
        let keypls = Mesh.selected[0].getSelectedFaces()[0];
        let uvpls = Mesh.selected[0].getSelectedVertices()[0];
        storedspls[0] = Mesh.selected[0]._static.properties.faces[keypls].uv[uvpls][0];
        storedspls[1] = Mesh.selected[0]._static.properties.faces[keypls].uv[uvpls][1];
        storedspls[2] = 0;
        Blockbench.setStatusBarText( 'Copycat: Keep [' + storedspls[0] + ', ' + storedspls[1] + ']' );
        Canvas.updateUVs();
        UVEditor.loadData();
    }

    function writeUVPointpls(){
        let keypls = Mesh.selected[0].getSelectedFaces()[0];
        let uvpls = Mesh.selected[0].getSelectedVertices()[0];
        Mesh.selected[0]._static.properties.faces[keypls].uv[uvpls][0] = storedspls[0];
        Mesh.selected[0]._static.properties.faces[keypls].uv[uvpls][1] = storedspls[1];
        storedspls[2] = 1;
        Blockbench.setStatusBarText( 'Pastecat: Placed [' + storedspls[0] + ', ' + storedspls[1] + ']' );
        Canvas.updateUVs();
        UVEditor.loadData();
    }

    function superUVPointpls(){
        if ( storedspls[2] == 0 ) {
            writeUVPointpls();
        } else {
            getUVPointpls();
        }
    }

    Plugin.register('uv_point_copycat', {
        title: 'UV Point Copycat!',
        icon: 'fas.fa-cat',
        author: 'OuOun',
        description: 'Easy copy & paste for selected mesh uv coordinate, made manual mapping purfect!',
        about: 'Watch mme get da uv point for ya, it will bee quick, trust mme! Big thx to Gudf.',
        tags: [],
        version: '0.4.16',
        variant: 'desktop',
        onload() {
            button_c = new Action('uv_point_copy', {
                icon: 'fas.fa-cat',
                color: 'x',
                name: 'Summon UV Copycat',
                category: 'uv',
                description: 'Let mme keep dis UV cooconut for ya!',
                condition: () => Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1,
                click: function() {
                    getUVPointpls();
                }
            });

            button_p = new Action('uv_point_paste', {
                icon: 'fas.fa-cat',
                color: 'z',
                name: 'Summon UV Pastecat',
                category: 'uv',
                description: 'Let mme place dis UV cooconut for ya!',
                condition: () => Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1,
                click: function() {
                    writeUVPointpls();
                }
            });

            button_q = new Action('uv_point_quick', {
                icon: 'fas.fa-cat',
                color: '#FF8C00',
                name: 'Summon UV Supercat',
                category: 'uv',
                description: 'Rotate between Copycat and Pastecat! Tho only a few can master dis skill!!',
                condition: () => Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1,
                click: function() {
                    superUVPointpls();
                }
            });

            MenuBar.menus.uv.addAction(button_c);
            MenuBar.menus.uv.addAction(button_p);
            MenuBar.menus.uv.addAction(button_q);

        },
        onunload() {
            button_c.delete();
            button_p.delete();
            button_q.delete();
        }
    });

})()
