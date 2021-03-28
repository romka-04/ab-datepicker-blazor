using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Components;

namespace Blazor.AbDatePicker.Shared
{
    public partial class SelectMultipleEnum<TItem> 
    {
        [Parameter]
        public List<TItem> Value { get; set; }

        [Parameter]
        public EventCallback<List<TItem>> ValueChanged { get; set; }

        [Parameter]
        public string Title { get; set; }

        [Parameter]
        public bool Multiple { get; set; }

        [Parameter]
        public int Size { get; set; } = 3;

        [Parameter]
        public string ClassNames { get; set; }

        private static TItem ChangeType(object obj)
        {
            if (null == obj) return default;

            return (TItem)Enum.Parse(typeof(TItem), obj.ToString() ?? string.Empty);
        }

        public SelectMultipleEnum()
        {
            if (!typeof(TItem).IsEnum)
            {
                throw new ArgumentException("TItem must be an enumerated type");
            }
        }
    }
}