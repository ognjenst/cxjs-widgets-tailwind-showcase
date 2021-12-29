import CodeMirror from "codemirror";
import { VDOM, Widget } from "cx/ui";
import "codemirror/lib/codemirror.css"

export class CodeMirrorCX extends Widget {
    render(context, instance, key) {
        let {data} = instance;
        return <CodeMirrorEditorComponent key={key} instance={instance} data={data} />;
    }
}

class CodeMirrorEditorComponent extends VDOM.Component {
    render() {
        let {data, instance} = this.props;
        return <textarea ref={(el) => this.el = el } className={data.className} style={data.style}/>
    }

    componentDidMount() {
       let editor = CodeMirror.fromTextArea(this.el, {
        lineNumbers: true,
       })
    }
}

