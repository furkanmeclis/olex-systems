import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {useEffect, useState} from "react";

const UpdateStatus = ({toast, workers, service, csrf_token, visible, setVisible}) => {
    const statusOptions = [
        {label: 'Başlanmadı', value: 'pending'},
        {label: 'Devam Ediyor', value: 'progress'},
        {label: 'Tamamlandı', value: 'completed'},
        {label: 'İptal Edildi', value: 'cancelled'}
    ];
    const [status, setStatus] = useState(statusOptions.find(s => s.value === service.status));
    useEffect(() => {
        console.log(status);
    }, [status]);
    return <>
        <Dialog header="Hizmet Kaydını Güncelle" maximizable visible={visible} onHide={() => {
            if (!visible) return;
            setVisible(false);
        }}
                style={{width: '40vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
            <div className="p-fluid">
                <div className={"mb-3"}>
                    <label htmlFor="email" className="font-bold">
                        Hizmet Kaydını Güncellemek İstediniz Durumu Seçin <span
                        className={"font-semibold text-red-400"}>*</span>
                    </label>
                    <Dropdown value={status}
                              options={statusOptions}
                              optionLabel={"label"}
                              onChange={(e) => setStatus(e)}
                              placeholder="Durum Seçin"
                              className={"w-full"}/>
                </div>
            </div>
        </Dialog>
    </>
}
export default UpdateStatus;
