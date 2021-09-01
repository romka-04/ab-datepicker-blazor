using Microsoft.AspNetCore.Components;

namespace Blazor.AbDatePicker
{
    // dirty hack: https://www.samprof.com/2019/06/03/blazor-forwardref
    public class ForwardRef<TComponent>
        where TComponent : ComponentBase
    {
        private TComponent _current;

        public TComponent Current
        {
            get => _current;
            set => Set(value);
        }
        public void Set(TComponent value)
        {
            _current = value;
        }
    }

    public class AbDatepickerForwardRef
        : ForwardRef<AbDatepicker>
    {
        public string ElementId => this.Current.ElementId;
    }
}